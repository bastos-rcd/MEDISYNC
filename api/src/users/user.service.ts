import { Repository } from 'typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'
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
}
