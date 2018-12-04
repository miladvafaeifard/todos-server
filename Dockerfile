FROM node:latest
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]