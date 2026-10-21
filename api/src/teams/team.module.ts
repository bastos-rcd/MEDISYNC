import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Team } from '@/teams/team.entity.js'
import { TeamController } from '@/teams/team.controller.js'
import { TeamService } from '@/teams/team.service.js'

import { User } from '@/users/user.entity.js'

@Module({
	imports: [TypeOrmModule.forFeature([Team, User])],
	controllers: [TeamController],
	providers: [TeamService],
	exports: [TeamService],
})
export class TeamModule {}
