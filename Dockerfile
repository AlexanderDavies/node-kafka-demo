FROM node:12.16.3-alpine

WORKDIR /usr 

#copy all files
COPY dist .

COPY yarn.lock .

#install dependencies
RUN yarn install

#expose the port
EXPOSE 3000

#run as a non-privileged user
CMD ["node", "src/server.js"]