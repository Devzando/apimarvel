FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

COPY prisma/ ./

RUN npm run build
COPY . .

CMD npm run migration:generate && npm run start:prod
