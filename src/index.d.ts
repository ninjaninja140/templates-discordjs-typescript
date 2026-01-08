declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GATEWAY_TOKEN: string;
		}
	}
}

declare module "@sapphire/pieces" {
	interface Container {
		dev: boolean;
	}
}

export {};
