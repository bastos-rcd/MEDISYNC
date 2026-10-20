import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common'

import { Public } from '@/auth/decorators/public.decorator.js'
import { Roles } from '@/auth/decorators/roles.decorator.js'

import { User } from '@/users/user.entity.js'
import { UserService } from '@/users/user.service.js'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Roles('MANAGER')
	@Post()
	async create(@Body() dto: Partial<User>): Promise<User> {
		return this.userService.create(dto)
	}

	@Put(':id')
	async update(
		@Param('id') id: number,
		@Body() dto: Partial<User>,
	): Promise<User> {
		return this.userService.update(id, dto)
	}

	@Public()
	@Put('/password')
	async password(
		@Body() dto: { email: string; password: string },
	): Promise<void> {
		return this.userService.password(dto.email, dto.password)
	}

	@Roles('MANAGER')
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<User> {
		return this.userService.delete(id)
	}
}
