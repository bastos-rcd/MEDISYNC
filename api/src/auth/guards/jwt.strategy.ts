import { ExtractJwt, Strategy } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { UserService } from '@/users/user.service.js'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: process.env.JWT_SECRET ?? 'azerty',
		})
	}

	async validate(payload: { sub: number; username: string; role: string }) {
		const user = await this.userService.find(payload.sub)

		if (!user) throw new UnauthorizedException()

		return user
	}
}
