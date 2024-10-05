# backend-docker file 
# latest node image
FROM node:latest

# working directory
WORKDIR /backend

# copying package.json & package-lock.json 
COPY package*.json ./

# clean install all dependencies 
RUN npm ci

# copy all the flies to the working directory
COPY  . .

# change ownership to node
RUN chown -R node:node /backend
USER node

# port exposed 
EXPOSE 3000

# Setting enviromnent 
ENV NODE_ENV=stagging

# Starting backend server
CMD ["npm" , "start"]