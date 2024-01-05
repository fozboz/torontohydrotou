FROM node:20-alpine

ENV TZ=America/Toronto

WORKDIR torontohydrotou

COPY . .

RUN apk add --no-cache tzdata && npm install

CMD node hydronode.js
