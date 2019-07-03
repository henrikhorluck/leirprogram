FROM node:10-alpine AS builder
LABEL maintainer="Henrik Hørlück Berg <henrik@horluck.no>"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build && yarn --production


FROM node:10-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
