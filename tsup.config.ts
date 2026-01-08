import { moduleJsOptions } from '@bracketed/tsup-configuration';
import { defineConfig } from 'tsup';

export default [
	defineConfig({
		...moduleJsOptions,
		dts: false,
		sourcemap: true,
		esbuildOptions(options) {
			options.alias = {
				'@': './src',
			};
		},
	}),
];
