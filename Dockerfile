FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

COPY prisma/ ./

RUN npx prisma generate

RUN npm install --global jest   # Adiciona esta linha para instalar o Jest globalmente

RUN npm run build
COPY . .

CMD npm run migration:generate && npm run start:prod
