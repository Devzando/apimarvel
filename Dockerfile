# Installing dependencies:
 
FROM node:18-alpine AS install-dependencies
 
WORKDIR /app
 
COPY package.json package-lock.json ./
 
RUN npm ci

RUN npm i jest
RUN npm i ts-node
 
COPY . .
 
 
# Creating a build:
 
FROM node:18-alpine AS create-build
 
WORKDIR /app
 
COPY --from=install-dependencies ./ ./

ARG PRISMA_DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV SHADOW_DATABASE_URL=${SHADOW_DATABASE_URL}
 
RUN npx prisma generate

RUN npm run build
 
USER node
 
 
# Running the application:
 
FROM node:18-alpine AS run
 
WORKDIR ./
 
COPY --from=install-dependencies ./node_modules ./node_modules
COPY --from=create-build ./dist ./dist
COPY package.json ./
 
RUN npm prune --production
 
CMD npm run migration:generate && npm run start