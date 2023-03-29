import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from '@/use-cases/register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists'

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'exampl@email.com',
      password: '123488',
    })

    expect(user.id).toEqual('user-1')
  })

  it('should register a new user', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'example2email.com',
      password: '123488',
    })

    const isPasswordHashed = await compare('123488', user.password_hash)
    expect(isPasswordHashed).toBe(true)
  })

  it('should not register a new user with an existing email', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const email = 'example2email.com'

    await registerUseCase.execute({
      name: 'John Doe',
      email: 'example2email.com',
      password: '123488',
    })

    await expect(() =>
      registerUseCase.execute({
        name: 'John Doe',
        email,
        password: '123488',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
