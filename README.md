
# Setup

### Postgres - Docker
- [ ] Install Docker
- [ ] Install Docker Compose
- [ ] Create a `.env` file based on `.env.example`
- [ ] Run the following command to start the database:
```bash
docker compose up -d
```
obs number 1: If you want to stop the database, run the following command:
```bash
docker compose stop
```
obs number 2: If you want to destroy the database, run the following command:
```bash
docker compose down
```

### Prisma ORM
- [ ] Create Migrations
```bash
npx prisma migrate dev
```





# App

GynPass style app

## RFs (Requisitos Funcionais)

- [ ] O usuário deve poder se cadastrar na aplicação utilizando nome, e-mail e senha;
- [ ] O usuário deve poder se autenticar na aplicação utilizando e-mail e senha;
- [ ] Deve ser possível obter o perfil do usuário logado;
- [ ] Deve ser possível obter o número de check-ins do usuário logado;
- [ ] Deve ser possível obter o histórico de check-ins;
- [ ] Deve ser possível o usuário buscar por academias próximas;
- [ ] Deve ser possível o usuário buscar por academias próximas por nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in do usuário;

## RNs (Regras de Negócio)

- [ ] O usuário não pode se cadastrar com um e-mail já existente;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver dentro do raio de 100m da academia;
- [ ] O usuário não pode fazer check-in se não estiver dentro do horário de funcionamento da academia;
- [ ] O check-in só pode ser validado até 20 min após o check-in;
- [ ] O check-in só pode ser validado por admins da academia;
- [ ] A academia só pode ser cadastrada por admins;

## RNFs (Requisitos Não Funcionais)

- [ ] Utilizar TypeScript;
- [ ] Utilizar o padrão de arquitetura SOLID;
- [ ] A senha precisa estar criptografada;
- [ ] O token precisa ser armazenado no local storage;
- [ ] O token precisa ser enviado no header de todas as requisições;
- [ ] Os dados da aplicação devem ser armazenados no PostgreSQL;
- [ ] Todas as listas de dados devem ser paginadas em 20 itens;
- [ ] O usuário deve ser identificado pelo ID do token JWT;
