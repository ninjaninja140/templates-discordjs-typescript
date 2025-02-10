import { ApplyOptions } from '@sapphire/decorators';
import { container, Listener, SapphireClient } from '@sapphire/framework';
import '@sapphire/plugin-logger/register';
import { ActivityType } from 'discord.js';

@ApplyOptions<Listener.Options>({ once: true })
export class ReadyListener extends Listener {
	public async run(c: SapphireClient) {
		container.logger.info('Gateway: Client Ready Event Stage initiated, starting...');

		c.user!.setActivity({
			name: 'around with the Discord Gateway!',
			type: ActivityType.Playing,
		});

		container.logger.info('Gateway: Activity set Stage completed, continuing...');
		container.logger.info(`Gateway: Now successfully started as ${c.user!.username}!`);
	}
}
