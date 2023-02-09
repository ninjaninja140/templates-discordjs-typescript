import { Listener, container } from '@sapphire/framework';
import { Guild } from 'discord.js';

export class GuildListener extends Listener {
	public async run(Guild: Guild) {
		container.logger.info(`DiscordJs: Joined ${Guild.name}.`);
	}
}
