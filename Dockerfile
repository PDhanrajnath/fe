FROM node:10-alpine
RUN mkdir /app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production 
RUN mv node_modules ../
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]