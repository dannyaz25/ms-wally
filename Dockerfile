# Run from Node 10
FROM node:10

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json /app/

RUN npm install
# Bundle app source
COPY . /app
RUN npm run build
# Make port 3000 available to the world outside this container
EXPOSE 3000

ENTRYPOINT npm start