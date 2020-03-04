FROM keymetrics/pm2:latest-alpine

WORKDIR /app
EXPOSE 3000
COPY . .
RUN yarn

ENTRYPOINT exec pm2-runtime start pm2.json