# Stage 1: Build the Angular app
FROM node:18.17.0 as build

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Create the final runtime image
FROM nginx:latest

# Copy the built Angular app from the 'build' stage to the nginx public directory
COPY --from=build /src/app/dist/urban-vogue-web /usr/share/nginx/html

# Expose the port the app runs on (if necessary, for documentation purposes)
EXPOSE 80

# Nginx configuration (if needed)
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
