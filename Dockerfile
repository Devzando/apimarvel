FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

COPY prisma/ .

ARG PRISMA_DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}

RUN npx prisma generate

RUN npm run build
COPY . .

CMD npm run migration:generate && npm run start:prod
