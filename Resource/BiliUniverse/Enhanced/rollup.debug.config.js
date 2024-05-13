import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";

export default [
	{
		input: 'src/BiliBili.Enhanced.response.beta.js',
		output: {
			file: 'js/BiliBili.Enhanced.response.beta.js',
			format: 'es',
			banner: '/* README: https://github.com/BiliUniverse */',
		},
		plugins: [json(), commonjs()]
	},
	{
		input: 'src/BiliIntl.Enhanced.response.beta.js',
		output: {
			file: 'js/BiliIntl.Enhanced.response.beta.js',
			format: 'es',
			banner: '/* README: https://github.com/BiliUniverse */',
		},
		plugins: [json(), commonjs()]
	},
];
