import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '@/users/user.entity.js'
import { UserController } from '@/users/user.controller.js'
import { UserService } from '@/users/user.service.js'

import { TeamModule } from '@/teams/team.module.js'

@Module({
	imports: [TypeOrmModule.forFeature([User]), TeamModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
