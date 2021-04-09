FROM node:12.18-alpine
ENV NODE_ENV=development
RUN mkdir -p /usr/src/web
WORKDIR /usr/src/web
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
