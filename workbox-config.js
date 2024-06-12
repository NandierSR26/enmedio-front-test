module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{svg,css,js,jpg,html}'
	],
	swDest: 'dist/sw.js',
	swSrc: 'src/sw-template.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ]
};