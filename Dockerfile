FROM node

RUN apt-get update && apt-get install -y

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]