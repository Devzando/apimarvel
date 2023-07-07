FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install 
COPY . .

RUN npm run build
COPY . .

CMD npm run update:schema && npm run start:prod