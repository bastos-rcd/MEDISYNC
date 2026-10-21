import * as bcrypt from 'bcrypt'
import { Not, Repository } from 'typeorm'
import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from '@/users/user.entity.js'

import { TeamService } from '@/teams/team.service.js'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly repo: Repository<User>,
		private readonly teamService: TeamService,
	) {}

	async find(id: number): Promise<User> {
		const user = await this.repo.findOne({ where: { id } })

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		return user
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.repo
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email })
			.getOne()

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		return user
	}

	async findAllManager(user: User): Promise<User[]> {
		return this.repo.find({
			where: { role: 'MANAGER', id: Not(user.id) },
		})
	}

	async findAllWorker(user: User): Promise<User[]> {
		const team = await this.teamService.findWithMembers(user)

		if (!team)
			throw new ConflictException('Aucune équipe trouvée pour ce manager !')

		return team.members
	}

	async createManager(dto: Partial<User>): Promise<User> {
		if (
			!dto.firstName ||
			!dto.lastName ||
			!dto.email ||
			dto.leaveBalance === undefined ||
			dto.leaveBalance === null ||
			dto.workingTime === undefined ||
			dto.workingTime === null
		)
			throw new BadRequestException('Données requises manquantes !')

		const user = await this.repo.findOne({ where: { email: dto.email } })

		if (user) throw new ConflictException('Email déjà existant !')

		const create = this.repo.create({ ...dto, role: 'MANAGER' })

		return await this.repo.save(create)
	}

	async createWorker(user: User, dto: Partial<User>): Promise<User> {
		if (
			!dto.firstName ||
			!dto.lastName ||
			!dto.email ||
			dto.leaveBalance === undefined ||
			dto.leaveBalance === null ||
			dto.workingTime === undefined ||
			dto.workingTime === null
		)
			throw new BadRequestException('Données requises manquantes !')

		const team = await this.teamService.find(user)

		if (!team) throw new NotFoundException('Équipe introuvable !')

		const existing = await this.repo.findOne({ where: { email: dto.email } })

		if (existing) throw new ConflictException('Email déjà existant !')

		const create = this.repo.create({ ...dto, role: 'WORKER' })
		const data = await this.repo.save(create)

		await this.teamService.assign(team.id, data)

		return data
	}

	async update(id: number, dto: Partial<User>): Promise<User> {
		const user = await this.repo.findOne({ where: { id } })

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		if (dto.password) {
			dto.password = await bcrypt.hash(dto.password, 10)
		}

		return await this.repo.save({ ...user, ...dto })
	}

	async password(email: string, password: string): Promise<void> {
		if (!email || !password)
			throw new BadRequestException('Données requises manquantes !')

		const user = await this.repo
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email })
			.getOne()

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		if (user.password) throw new ConflictException('Mot de passe déjà défini !')

		user.password = await bcrypt.hash(password, 10)

		await this.repo.save(user)
	}

	async delete(id: number): Promise<User> {
		const user = await this.repo.findOne({
			where: { id },
		})

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		return await this.repo.remove(user)
	}
}
