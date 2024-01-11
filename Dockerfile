FROM node:20-alpine3.18

WORKDIR /src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn dev