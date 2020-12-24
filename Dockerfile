# specify the node base image with your desired version node:<version>
#FROM node:10.16.0-alpine
#WORKDIR /usr/src
#COPY ./package.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#CMD [ "npm", "start"]

FROM node:10.16.0 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:10.16.0-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]
