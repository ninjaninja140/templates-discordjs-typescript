import { Utility } from '@sapphire/plugin-utilities-store';

declare module '@sapphire/plugin-utilities-store' {
	export interface Utilities {
		example: ExampleUtility;
	}
}

export class ExampleUtility extends Utility {
	public constructor(context: Utility.LoaderContext, options: Utility.Options) {
		super(context, {
			...options,
			name: 'example',
		});
	}

	public run() {
		console.log('hi')
	}
}
