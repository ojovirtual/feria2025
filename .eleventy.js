const pluginSitemap = require('@quasibit/eleventy-plugin-sitemap');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('css'); // Copia tu CSS al output
	eleventyConfig.addPassthroughCopy('site.webmanifest'); // Copia el manifest
	eleventyConfig.addPassthroughCopy('*.ico'); // Copia favicons
	eleventyConfig.addPassthroughCopy('*.png'); // Copia iconos PNG
        eleventyConfig.addPassthroughCopy('images'); // Copia imágenes
        eleventyConfig.addPassthroughCopy('robots.txt'); // Copia robots.txt
        eleventyConfig.addPassthroughCopy('sitemap.xml'); // Copia sitemap
	eleventyConfig.ignores.add('CLAUDE.md'); // o el archivo que quieras ignorar
        eleventyConfig.ignores.add('README.md'); // o el archivo que quieras ignorar
        eleventyConfig.addGlobalData('layout', 'layout.njk');
        eleventyConfig.addPlugin(pluginSitemap, {
                sitemap: {
                        hostname: 'https://feria.antequera.click',
                },
        });

        let options = { html: true };
        eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItAttrs));

	return {
		dir: {
			input: '.', // carpeta raíz del proyecto
			includes: '_includes', // plantillas
			output: '_site', // salida del sitio generado
		},
		markdownTemplateEngine: 'njk',
	};
};
