FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl libssl-dev

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "start:dev"]