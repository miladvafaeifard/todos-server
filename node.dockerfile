FROM node:latest

ENV NODE_ENV development
ENV NODE_PORT=7000
ENV MYSQL_HOST=172.25.0.2

WORKDIR /usr/src/app
COPY ["package*.json", "./"]
COPY . .
RUN npm install

EXPOSE $PORT
CMD ["npm", "start"]