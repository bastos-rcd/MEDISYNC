import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ name: 'first_name', length: 100 })
	firstName: string

	@Column({ name: 'last_name', length: 100 })
	lastName: string

	@Column({ length: 255, unique: true })
	email: string

	@Column({ length: 255, select: false })
	password: string

	@Column({
		length: 10,
		default: 'WORKER',
		enum: ['WORKER', 'MANAGER', 'ADMIN'],
	})
	role: string

	@Column({
		name: 'leave_balance',
		type: 'numeric',
		precision: 5,
		scale: 2,
		default: 0,
	})
	leaveBalance: number

	@Column({
		name: 'working_time',
		type: 'numeric',
		precision: 5,
		scale: 2,
	})
	workingTime: number

	@Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
	createdAt: Date
}
