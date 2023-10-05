FROM node:16.1


RUN mkdir /var/log/node

WORKDIR /var/www/html

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80