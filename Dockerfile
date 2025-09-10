FROM node:20-alpine

# diretório de trabalho
WORKDIR /usr/src/app

# copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# copia o resto do código
COPY . .

# expõe porta da API
EXPOSE 3000

# comando padrão
CMD ["npm", "run", "dev"]