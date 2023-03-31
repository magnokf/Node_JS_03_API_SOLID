import { UsersRepository } from '@/repositories/users-repository'

export interface AuthenticateUseCaseRequest {
	email: string
	password: string
}
interface AuthenticateUseCaseResponse {

}

export class AuthenticateUseCase {
	constructor(private usersRepository: UsersRepository) {}
	
	async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
		const user = await this.usersRepository.findByEmail(email)
		if (!user) {
			throw new Error('User not found')
		}
		if (password !== password) {
			throw new Error('Incorrect password')
		}
		return {}
	}
}