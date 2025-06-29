# Stage 1: Build NestJS app
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y openssl libssl-dev

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Run compiled app
FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl libssl-dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000

CMD ["node", "dist/main"]