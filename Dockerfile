FROM node:22-alpine AS builder

WORKDIR /app

# Build arguments for Vite env variables (inlined at build time)
ARG VITE_POSTHOG_KEY
ARG VITE_POSTHOG_HOST

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the build output to Nginx's html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Change Nginx port to 8080
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
