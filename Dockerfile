FROM node:10.15.1-alpine

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "start"]