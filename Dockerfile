FROM node:latest
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "app.js"]
