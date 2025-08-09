# --- Etapa 1: build con Node ---
FROM node:20-alpine AS build
WORKDIR /app

# Copiamos solo manifest para aprovechar caché
COPY package*.json ./
# Si no tienes package-lock.json, quita la línea anterior y deja solo package.json

# Instala deps (eleventy como devDependency)
RUN npm ci --omit=optional || npm install

# Copia el resto del proyecto
COPY . .

# Importante: el script "build" debe ejecutar eleventy
# (equivale a: npx @11ty/eleventy)
RUN npm run build

# --- Etapa 2: imagen final con nginx ---
FROM nginx:alpine
# Copia el sitio generado por 11ty
COPY --from=build /app/_site/ /usr/share/nginx/html/

# (opcional) tu config de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Railway con Docker suele aceptar el 80 sin problemas
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
