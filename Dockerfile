FROM node:8.11.4-alpine

WORKDIR /home/node

COPY . /home/node

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
