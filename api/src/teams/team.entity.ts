import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from '@/users/user.entity.js'

@Entity('teams')
export class Team {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ length: 255 })
	name: string

	@Column({ name: 'max_time', type: 'numeric', precision: 5, scale: 2 })
	maxTime: number

	@Column({ name: 'min_rest', type: 'numeric', precision: 5, scale: 2 })
	minRest: number

	@Column({ type: 'jsonb', default: {} })
	cover: Record<string, any>

	@Column({ name: 'manager_id' })
	managerId: number

	@ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
	@JoinColumn({ name: 'manager_id' })
	manager: User

	@Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
	createdAt: Date

	@ManyToMany(() => User, { cascade: true })
	@JoinTable({
		name: 'team_members',
		joinColumn: { name: 'team_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
	})
	members: User[]
}
