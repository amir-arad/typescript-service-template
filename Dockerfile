FROM node:12.8

# Env
# this will affect all node and npm commands
ENV NODE_ENV production
ENV PORT 7001

# Create Directory for the Container
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# fetching only production dependencies, as NODE_ENV is set for production
RUN npm ci

# Bundle app source
COPY dist ./dist

# Start
CMD [ "npm", "start" ]
EXPOSE 7001