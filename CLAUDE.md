# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Feria de Agosto 2025" in Antequera, built using Eleventy (11ty), a static site generator. The site displays information about a local festival including program, concerts, venues, contests, bullfights, services, and maps.

## Architecture

- **Static Site Generator**: Eleventy (11ty) v3.1.2
- **Template Engine**: Nunjucks (.njk files) for HTML templates
- **Content**: Markdown files with front matter
- **Styling**: CSS files in `/css/` directory
- **Build Output**: `_site/` directory (generated)
- **Templates**: `_includes/` directory contains layout templates

### Key Files Structure
- `index.md` - Homepage content with front matter
- `_includes/layout.njk` - Main HTML layout template
- `.eleventy.js` - Eleventy configuration file
- `css/style.css` - Main stylesheet (copied to output)
- `_site/` - Generated static site output

## Development Commands

### Build the site
```bash
npx @11ty/eleventy
```

### Development server (watch mode)
```bash
npx @11ty/eleventy --serve
```

### Clean build
```bash
# Remove _site directory first, then rebuild
rmdir /s _site && npx @11ty/eleventy
```

## Configuration Details

The Eleventy configuration (`.eleventy.js`) is set up with:
- Input directory: project root (`.`)
- Includes directory: `_includes/` 
- Output directory: `_site/`
- Template engine: Nunjucks for Markdown files
- Passthrough copy: CSS files are copied directly to output

## Content Management

- Content files use Markdown with YAML front matter
- Layout is specified in front matter: `layout: layout.njk`
- The main layout includes navigation for: Programa, Conciertos, Casetas, Concursos, Toros, Servicios, Mapas
- Site language is Spanish (`lang="es"`)

## External Dependencies

- Google Fonts: Archivo Black and Rajdhani fonts loaded via CDN
- No other external JavaScript or CSS frameworks detected

## Important Notes

- Este sitio está hecho con eleventy, no toques la carpeta _site