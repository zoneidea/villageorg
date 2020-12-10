FROM node:alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
RUN  npm  install -g serve
COPY . .
RUN  npm run build
# CMD ["npm", "start"]
CMD ["serve","-s","--listen","8002","build"]

# FROM node:latest as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build

# FROM nginx:latest as production-stage
# RUN mkdir /app
# COPY --from=build-stage /app/build /app
# COPY nginx.conf /etc/nginx/nginx.conf