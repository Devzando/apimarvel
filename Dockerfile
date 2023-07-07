# Para rodar testes

FROM node:18 AS test-image

WORKDIR /app

COPY package*.json ./

RUN npm i --only=dev
RUN npm i   jest
RUN npm i   ts-node

COPY . .

COPY prisma/ .

ARG PRISMA_DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}

RUN npx prisma generate

RUN npm run build
COPY . .

CMD npm run migration:generate && npm run start:prod

# Para rodar build e deploy

FROM node:18 AS build-deploy

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

COPY prisma/ .

ARG PRISMA_DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}

RUN npx prisma generate

RUN npm run build
COPY . .

CMD npm run migration:generate && npm run start:prod
