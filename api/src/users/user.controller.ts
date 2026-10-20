import { Body, Controller, Post } from '@nestjs/common'

import { Public } from '@/auth/decorators/public.decorator.js'

import { User } from '@/users/user.entity.js'
import { UserService } from '@/users/user.service.js'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	// TODO
	// @Roles('MANAGER')
	@Public()
	@Post()
	async create(@Body() dto: Partial<User>): Promise<User> {
		return this.userService.create(dto)
	}
}
