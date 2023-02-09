import dotenv from 'dotenv';
dotenv.config();
import '@sapphire/plugin-logger/register';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { container } from '@sapphire/pieces';
container.client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds],
});

if (process.env.BOT_TOKEN === 'null') {
	container.logger.info(
		'DiscordJs: Please put a token into .env BOT_TOKEN to start this bot!'
	);
}

await container.client.login(process.env.BOT_TOKEN).then(() => {
	container.logger.info(
		'DiscordJs: Login Connected, beginning bot startup process.'
	);
});
