# Real Feria de Agosto 2025 - Antequera

Sitio web oficial de la Real Feria de Agosto 2025 de Antequera.

## 🚀 Despliegue en Railway

Este proyecto está configurado para desplegarse automáticamente en Railway.com usando Docker.

### Archivos de configuración:

- `Dockerfile` - Imagen Docker con nginx alpine
- `nginx.conf` - Configuración del servidor web
- `railway.json` - Configuración específica de Railway
- `.dockerignore` - Archivos excluidos del build Docker

### Pasos para desplegar:

1. **Conecta tu repositorio a Railway:**
   - Ve a [railway.app](https://railway.app)
   - Conecta tu cuenta de GitHub
   - Selecciona este repositorio

2. **Railway detectará automáticamente:**
   - El `Dockerfile` y construirá la imagen
   - La configuración en `railway.json`
   - Servirá el contenido de `_site/`

3. **El sitio estará disponible en:**
   - Una URL generada por Railway
   - Opcionalmente configura tu dominio personalizado

## 🛠️ Desarrollo Local

### Requisitos:
- Node.js
- npm

### Comandos:
```bash
# Instalar dependencias
npm install

# Construir el sitio
npx @11ty/eleventy

# Modo desarrollo con watch
npx @11ty/eleventy --serve
```

### Con Docker:
```bash
# Construir imagen
docker build -t feria-antequera .

# Ejecutar contenedor
docker run -p 8080:80 feria-antequera
```

## 📁 Estructura

```
├── _includes/          # Plantillas Nunjucks
├── _site/             # Sitio generado (servido por nginx)
├── programa/          # Contenido del programa
├── servicios/         # Información de servicios
├── css/              # Hojas de estilo
├── Dockerfile        # Configuración Docker
├── nginx.conf        # Configuración nginx
└── railway.json      # Configuración Railway
```

## 🔧 Tecnologías

- **Generator**: Eleventy (11ty)
- **Templates**: Nunjucks
- **Styling**: CSS custom + Bootstrap Icons
- **Server**: nginx alpine
- **Deploy**: Railway.com