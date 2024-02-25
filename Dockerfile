FROM node:18-alpine as build-step
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

RUN rm -rf /usr/share/nginx/html/*

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
