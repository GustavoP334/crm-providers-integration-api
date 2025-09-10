# CRM Providers Integration API

Backend em **Node.js + Express** para integração entre um sistema **CRM interno** e diferentes **provedores de TV**, permitindo gerenciamento unificado de clientes, planos de assinatura e suporte técnico.

Inclui:
- **API RESTful** com Express
- **Validação de entrada** (Joi)
- **Processamento assíncrono** com BullMQ + Redis
- **Banco de dados** PostgreSQL (via Prisma)
- **Documentação OpenAPI/Swagger**
- Arquitetura **stateless** e princípios **REST**

---

## 🚀 Tecnologias

- Node.js + Express
- PostgreSQL + Prisma
- Redis + BullMQ
- Swagger (OpenAPI)
- Docker + Docker Compose

---

## 📦 Instalação e execução

### 1. Crie um arquivo .env na raiz:
```bash
    PORT=3000
    NODE_ENV=development
    REDIS_URL=redis://redis:6379
    DATABASE_URL=postgresql://user:password@postgres:port/db_name
```

### 2. Instale dependências
```bash
    npm install
```

### 3. Migre o banco de dados
```bash
    npx prisma migrate dev --name init
```

### 4. Execute as seeders do banco
```bash
    npm run seed
```

### 5. Execute a API
```bash
    npm run dev
```

---

📚 Documentação da API

Acesse o Swagger UI:
👉 http://localhost:3000/api-docs