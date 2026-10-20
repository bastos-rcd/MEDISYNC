import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { JwtStrategy } from '@/auth/guards/jwt.strategy.js'

import { AuthController } from '@/auth/auth.controller.js'
import { AuthService } from '@/auth/auth.service.js'

import { UserModule } from '@/users/user.module.js'

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				secret: config.get<string>('JWT_SECRET') ?? 'azerty',
				signOptions: {
					expiresIn: '1d',
				},
			}),
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	exports: [AuthService],
})
export class AuthModule {}
