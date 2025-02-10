import { SapphireClient } from '@sapphire/framework';
import { container } from '@sapphire/pieces';
import '@sapphire/plugin-logger/register';
import { GatewayIntentBits, Partials } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

container.client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds],
	partials: [Partials.GuildMember, Partials.User, Partials.Channel],
});

await container.client.login(process.env.GATEWAY_TOKEN).then(() => {
	container.logger.info('Gateway: Login Connected, beginning bot startup process.');
});
