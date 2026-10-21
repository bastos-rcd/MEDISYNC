import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { Roles } from '@/auth/decorators/roles.decorator.js'

import { CurrentUser } from '@/auth/decorators/current.decorator.js'
import { TeamService } from '@/teams/team.service.js'

import { Team } from '@/teams/team.entity.js'

import { User } from '@/users/user.entity.js'

@Controller('teams')
export class TeamController {
	constructor(private readonly teamService: TeamService) {}

	@Roles('MANAGER')
	@Get()
	async find(@CurrentUser() user: User): Promise<Team> {
		return this.teamService.find(user)
	}

	@Roles('MANAGER')
	@Post()
	async create(
		@CurrentUser() user: User,
		@Body() dto: Partial<Team>,
	): Promise<Team> {
		return this.teamService.create(user, dto)
	}

	@Roles('MANAGER')
	@Put()
	async update(
		@CurrentUser() user: User,
		@Body() dto: Partial<Team>,
	): Promise<Team> {
		return this.teamService.update(user, dto)
	}

	@Roles('MANAGER')
	@Delete()
	async delete(@CurrentUser() user: User): Promise<Team> {
		return this.teamService.delete(user)
	}
}
