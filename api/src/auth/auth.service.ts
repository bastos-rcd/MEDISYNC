import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '@/users/user.service.js'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async login(email: string, password: string): Promise<{ token: string }> {
		if (!email || !password)
			throw new UnauthorizedException('Identifiants invalides !')

		const user = await this.userService.findByEmail(email)

		const valid = await bcrypt.compare(password, user.password)

		if (!valid) throw new UnauthorizedException('Identifiants invalides !')

		const payload = { sub: user.id, email: user.email, role: user.role }

		return { token: this.jwtService.sign(payload) }
	}
}
