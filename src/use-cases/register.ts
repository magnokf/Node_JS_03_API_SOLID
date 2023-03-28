import { hash } from 'bcryptjs'

import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

interface RegisterUseCaseRequest {
	name: string
	email: string
	password: string
}

export class RegisterUseCase {
	constructor(private usersRepository: UsersRepository) {
		this.execute = this.execute.bind(this)
	}
	
	async execute({ name, email, password }: RegisterUseCaseRequest) {
		const password_hash = await hash(password, 6)
		
		const userWithSomeEmail = await this.usersRepository.findByEmail(email)
		
		if (userWithSomeEmail) {
			throw new UserAlreadyExistsError()
		}
		await this.usersRepository.create({
			name,
			email,
			password_hash
		})
		
	}
	
}
