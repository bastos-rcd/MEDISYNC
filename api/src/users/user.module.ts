import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from '@/users/user.entity.js'
import { UserController } from '@/users/user.controller.js'
import { UserService } from '@/users/user.service.js'

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
