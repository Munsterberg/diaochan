FROM node:12.18-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
