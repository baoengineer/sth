const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme-docs.config.js',
});

const withTM = require('next-transpile-modules')(['@fontsource/space-grotesk']);

module.exports = withTM(
	withNextra({
		reactStrictMode: true,
	})
);
