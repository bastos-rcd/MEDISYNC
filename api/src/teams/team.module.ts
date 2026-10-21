import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Team } from '@/teams/team.entity.js'
import { TeamController } from '@/teams/team.controller.js'
import { TeamService } from '@/teams/team.service.js'

@Module({
	imports: [TypeOrmModule.forFeature([Team])],
	controllers: [TeamController],
	providers: [TeamService],
	exports: [TeamService],
})
export class TeamModule {}
