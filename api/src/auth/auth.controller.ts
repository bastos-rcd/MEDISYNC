import { Body, Controller, Get, Post } from '@nestjs/common'

import { CurrentUser } from '@/auth/decorators/current.decorator.js'
import { Public } from '@/auth/decorators/public.decorator.js'

import { AuthService } from '@/auth/auth.service.js'

import { User } from '@/users/user.entity.js'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Public()
	@Post('login')
	async login(
		@Body() dto: { email: string; password: string },
	): Promise<{ token: string }> {
		return this.authService.login(dto.email, dto.password)
	}

	@Get('me')
	async me(@CurrentUser() user: User) {
		return user
	}
}
