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

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly repo: Repository<User>,
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
		// TODO : find team in user and get all worker in that team
		return this.repo.find({ where: { role: 'WORKER' } })
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

	async createWorker(teamId: number, dto: Partial<User>): Promise<User> {
		if (
			!teamId ||
			!dto.firstName ||
			!dto.lastName ||
			!dto.email ||
			dto.leaveBalance === undefined ||
			dto.leaveBalance === null ||
			dto.workingTime === undefined ||
			dto.workingTime === null
		)
			throw new BadRequestException('Données requises manquantes !')

		// TODO : find team && throw error

		const user = await this.repo.findOne({ where: { email: dto.email } })

		if (user) throw new ConflictException('Email déjà existant !')

		const create = this.repo.create({ ...dto, role: 'WORKER' })
		const data = await this.repo.save(create)

		// TODO : assign team

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
