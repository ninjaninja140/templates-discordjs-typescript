import '@sapphire/plugin-logger/register';
import { ApplyOptions } from '@sapphire/decorators';
import { Listener, container, SapphireClient } from '@sapphire/framework';
import { ActivityType } from 'discord.js';

@ApplyOptions<Listener.Options>({ once: true })
export class ReadyListener extends Listener {
	public async run(c: SapphireClient) {
		container.logger.info(
			'DiscordJs: Client Ready Event Stage initiated, starting...'
		);
		c.user!.setActivity('Starting!', {
			type: ActivityType.Streaming,
			url: 'https://twitch.tv/ninjaninja140',
		});

		c.user!.setActivity({
			type: ActivityType.Playing,
		});

		container.logger.info(
			'DiscordJs: Activity set Stage completed, continuing...'
		);
		container.logger.info(
			`DiscordJs: Now successfully started as ${c.user.username}!`
		);
	}
}
