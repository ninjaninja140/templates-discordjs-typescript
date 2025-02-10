import { Listener, container } from '@sapphire/framework';
import { Interaction, InteractionType } from 'discord.js';

export class InteractionListener extends Listener {
	public async run(Interaction: Interaction) {
		if (Interaction.inGuild() && Interaction.type === InteractionType.ApplicationCommand) {
			container.logger.info(
				`Gateway: ${Interaction.user.tag} ran ${Interaction.commandName} in ${
					container.client.guilds.cache.get(Interaction.guildId!)?.name
				}.`
			);
		}
	}
}
