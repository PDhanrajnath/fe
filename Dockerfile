FROM node:10-alpine 
COPY ["package.json", "package-lock.json*", "./"]
RUN npx browserslist@latest --update-db
RUN npm install 
RUN mkdir /app 
RUN mv ./node_modules ./app
WORKDIR /app
COPY . .
RUN npm run build 
CMD [ "npm", "start" ]
