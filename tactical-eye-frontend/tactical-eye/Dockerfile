# Use Node.js for building the app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files and build
COPY . .
RUN npm run build

# Use a lightweight server for serving static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
