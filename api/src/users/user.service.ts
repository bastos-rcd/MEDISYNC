import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
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

	async create(dto: Partial<User>): Promise<User> {
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

		const create = this.repo.create({ ...dto })

		return await this.repo.save(create)
	}

	async password(dto: { email: string; password: string }): Promise<void> {
		if (!dto.email || !dto.password)
			throw new BadRequestException('Données requises manquantes !')

		const user = await this.repo
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.email = :email', { email: dto.email })
			.getOne()

		if (!user) throw new NotFoundException('Utilisateur introuvable !')

		if (user.password) throw new ConflictException('Mot de passe déjà défini !')

		user.password = await bcrypt.hash(dto.password, 10)

		await this.repo.save(user)
	}
}
