import { Repository } from 'typeorm'
import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Team } from '@/teams/team.entity.js'

import { User } from '@/users/user.entity.js'

@Injectable()
export class TeamService {
	constructor(
		@InjectRepository(Team)
		private readonly repo: Repository<Team>,
		@InjectRepository(User)
		private readonly userRepo: Repository<User>,
	) {}

	async find(user: User): Promise<Team> {
		const team = await this.repo.findOne({ where: { managerId: user.id } })

		if (!team)
			throw new ConflictException('Aucune équipe trouvée pour ce manager !')

		return team
	}

	async findWithMembers(user: User): Promise<Team> {
		const team = await this.repo.findOne({
			where: { managerId: user.id },
			relations: { members: true },
		})

		if (!team)
			throw new ConflictException('Aucune équipe trouvée pour ce manager !')

		return team
	}

	async findMyTeam(user: User): Promise<{ manager: User; members: User[] }> {
		const team = await this.repo.findOne({
			where: { members: { id: user.id } },
			relations: { manager: true, members: true },
		})

		if (!team)
			throw new ConflictException('Aucune équipe trouvée pour cet employé !')

		return {
			manager: team.manager,
			members: team.members.filter((member) => member.id !== user.id),
		}
	}

	async create(user: User, dto: Partial<Team>): Promise<Team> {
		if (
			!dto.name ||
			!dto.cover ||
			dto.maxTime === undefined ||
			dto.maxTime === null ||
			dto.minRest === undefined ||
			dto.minRest === null
		)
			throw new BadRequestException('Données requises manquantes !')

		const team = await this.repo.findOne({ where: { managerId: user.id } })

		if (team) throw new ConflictException('Manager possédant déjà une équipe !')

		const create = this.repo.create({ ...dto, managerId: user.id })

		return await this.repo.save(create)
	}

	async update(user: User, dto: Partial<Team>): Promise<Team> {
		const team = await this.repo.findOne({ where: { managerId: user.id } })

		if (!team)
			throw new NotFoundException('Équipe introuvable pour ce manager !')

		return await this.repo.save({ ...team, ...dto })
	}

	async delete(user: User): Promise<Team> {
		const team = await this.repo.findOne({
			where: { managerId: user.id },
			relations: { members: true },
		})

		if (!team)
			throw new NotFoundException('Équipe introuvable pour ce manager !')

		if (team.members.length > 0) {
			await this.userRepo.remove(team.members)
		}

		return await this.repo.remove(team)
	}

	async assign(id: number, user: User): Promise<Team> {
		const team = await this.repo.findOne({
			where: { id },
			relations: { members: true },
		})

		if (!team) throw new NotFoundException('Équipe introuvable !')

		team.members.push(user)
		await this.repo.save(team)

		return team
	}
}
