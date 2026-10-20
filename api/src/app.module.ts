import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { JwtGuard } from '@/auth/guards/jwt.guard.js'
import { RolesGuard } from '@/auth/guards/roles.guard.js'

import { User } from '@/users/user.entity.js'
import { UserModule } from '@/users/user.module.js'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST ?? 'localhost',
			port: Number(process.env.DB_PORT ?? 5432),
			username: process.env.DB_USER ?? 'user',
			password: process.env.DB_PASSWORD ?? 'password',
			database: process.env.DB_NAME ?? 'medisyncdb',
			entities: [User],
			synchronize: false,
		}),
		UserModule,
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtGuard,
		},
		{
			provide: APP_GUARD,
			useClass: RolesGuard,
		},
	],
})
export class AppModule {}
