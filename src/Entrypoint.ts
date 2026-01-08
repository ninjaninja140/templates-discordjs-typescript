import "@sapphire/plugin-logger/register";
import "@sapphire/plugin-utilities-store/register";

import { ApplicationCommandRegistries, RegisterBehavior, SapphireClient } from "@sapphire/framework";
import { container } from "@sapphire/pieces";
import { GatewayIntentBits, Partials } from "discord.js";

import "dotenv/config";

// This will refresh all of your commands every boot, it will also clear unknown commands too.
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);

container.dev = process.env.NODE_ENV === "development";
container.client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds],
	partials: [Partials.GuildMember, Partials.User, Partials.Channel],
});

async function main() {
	await container.client.login(process.env.GATEWAY_TOKEN).then(() => {
		container.logger.info('Gateway: Application is ready and listening at port 3000!');
	});
}

void main();
