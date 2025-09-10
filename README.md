# CRM Providers Integration API

Backend em **Node.js + Express** para integração entre um sistema **CRM interno** e diferentes **provedores**, permitindo gerenciamento unificado de clientes e planos de assinatura.

Inclui:
- **API RESTful** com Express
- **Validação de entrada** (Joi)
- **Processamento assíncrono** com BullMQ + Redis
- **Banco de dados** PostgreSQL (via Prisma)
- **Documentação OpenAPI/Swagger**
- Arquitetura **stateless** e princípios **REST**

---

📄 Documentação do Planejamento da arquitetura:

Acesse: [Planejamento da Arquitetura](docs/arquitetura.pdf)

---

---

📚 Documentação da API

Acesse o Swagger UI:
👉 http://localhost:3000/api-docs

---

## 🚀 Tecnologias

- Node.js + Express
- PostgreSQL + Prisma
- Redis + BullMQ
- Swagger (OpenAPI)
- Docker + Docker Compose

---

## 📦 Instalação e execução

### 🔹 Opção 1 — Usando Docker (recomendado)

Este projeto já inclui `Dockerfile` e `docker-compose.yml` para subir toda a stack (API + Redis + Postgres).

### 1. Copie o arquivo `.env.example` para `.env`:
```bash
   cp .env.example .env
```

### 2. Suba os containers:
```bash
   docker-compose up -d
```

### 3. Rode as migrações do banco:
```bash
   docker-compose exec api npx prisma migrate dev --name init
```

### 4. Popule o banco com dados utilizando a seed:
```bash
   docker-compose exec api npm run seed
```

---

### 🔹 Opção 2 — Sem Docker (manual)

### 1. Copie o arquivo `.env.example` para `.env`:
```bash
    cp .env.example .env
```

### 2. Instale dependências
```bash
    npm install
```

### 3. Migre o banco de dados
```bash
    npx prisma migrate dev --name init
```

### 4. Popule o banco com dados utilizando a seed:
```bash
    npm run seed
```

### 5. Execute a API
```bash
    npm run dev
```

---

## 🧪 Testes

Este projeto utiliza *Vitest* para testes unitários e de integração.

### Rodando localmente
1. Instale as dependências de desenvolvimento:
   ```bash
   npm install