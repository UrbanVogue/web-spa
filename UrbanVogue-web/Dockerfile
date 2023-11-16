# Stage 1: Build the Angular app
FROM node:18.13.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create the production-ready image
FROM nginx:latest

COPY --from=build /app/dist/urban-vogue-web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]