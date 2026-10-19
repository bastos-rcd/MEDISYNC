import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST ?? 'localhost',
			port: +(process.env.DB_PORT ?? 5432),
			username: process.env.DB_USER ?? 'user',
			password: process.env.DB_PASSWORD ?? 'pass',
			database: process.env.DB_NAME ?? 'medisyncdb',
			entities: [],
			synchronize: false,
		}),
	],
	providers: [],
})
export class AppModule {}
