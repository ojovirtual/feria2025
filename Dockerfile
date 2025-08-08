# Use nginx alpine for a lightweight web server
FROM nginx:alpine

# Copy the built site to nginx html directory
COPY _site/ /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Instala dependencias
RUN npm install

# Ejecuta Eleventy
RUN npx eleventy

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]