# frontend-docker file 
# latest node image
FROM node:latest

# working directory
WORKDIR /frontend

# copying package.json & package-lock.json 
COPY package*.json ./

# clean install all dependencies 
RUN npm ci

# copy all the flies to the working directory
COPY  . .

# change ownership to node
RUN chown -R node:node /frontend
USER node

# port exposed 
EXPOSE 8080

# Starting backend server
CMD ["npm" , "run" , "dev"]