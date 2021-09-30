FROM node:10-alpine 
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 
RUN mkdir /app 
RUN mv ./node_modules ./app
WORKDIR /app
COPY . .
CMD [ "npm", "start" ]
