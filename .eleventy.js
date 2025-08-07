module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('css'); // Copia tu CSS al output
	eleventyConfig.addPassthroughCopy('site.webmanifest'); // Copia el manifest
	eleventyConfig.addPassthroughCopy('*.ico'); // Copia favicons
	eleventyConfig.addPassthroughCopy('*.png'); // Copia iconos PNG
	eleventyConfig.addPassthroughCopy('images'); // Copia imágenes
	eleventyConfig.ignores.add('CLAUDE.md'); // o el archivo que quieras ignorar
    eleventyConfig.addGlobalData('layout', 'layout.njk');

	return {
		dir: {
			input: '.', // carpeta raíz del proyecto
			includes: '_includes', // plantillas
			output: '_site', // salida del sitio generado
		},
		markdownTemplateEngine: 'njk',
	};
};
