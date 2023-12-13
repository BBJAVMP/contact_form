FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./website/ .
EXPOSE 8000
CMD ["node", "app.js"]