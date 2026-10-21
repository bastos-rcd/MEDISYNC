import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { CurrentUser } from '@/auth/decorators/current.decorator.js'
import { Public } from '@/auth/decorators/public.decorator.js'
import { Roles } from '@/auth/decorators/roles.decorator.js'

import { User } from '@/users/user.entity.js'
import { UserService } from '@/users/user.service.js'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Roles('MANAGER')
	@Get('manager')
	async findAllManager(@CurrentUser() user: User): Promise<User[]> {
		return this.userService.findAllManager(user)
	}

	@Roles('MANAGER')
	@Get('worker')
	async findAllWorker(@CurrentUser() user: User): Promise<User[]> {
		return this.userService.findAllWorker(user)
	}

	@Get(':id')
	async find(@Param('id') id: number): Promise<User> {
		return this.userService.find(id)
	}

	@Roles('MANAGER')
	@Post('manager')
	async createManager(@Body() dto: Partial<User>): Promise<User> {
		return this.userService.createManager(dto)
	}

	@Roles('MANAGER')
	@Post('worker')
	async createWorker(
		@CurrentUser() user: User,
		@Body() dto: Partial<User>,
	): Promise<User> {
		return this.userService.createWorker(user, dto)
	}

	@Public()
	@Put('password')
	async password(
		@Body() dto: { email: string; password: string },
	): Promise<void> {
		return this.userService.password(dto.email, dto.password)
	}

	@Put(':id')
	async update(
		@Param('id') id: number,
		@Body() dto: Partial<User>,
	): Promise<User> {
		return this.userService.update(id, dto)
	}

	@Roles('MANAGER')
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<User> {
		return this.userService.delete(id)
	}
}
