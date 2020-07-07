# Run from Node 10
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 8080

CMD [ "node", "src/app.js" ]