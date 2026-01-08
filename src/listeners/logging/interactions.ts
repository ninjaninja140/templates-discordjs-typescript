import { container, Events, Listener } from '@sapphire/framework';
import { type Interaction, InteractionType } from 'discord.js';

export class InteractionListener extends Listener<typeof Events.InteractionCreate> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.InteractionCreate,
		});
	}

	public async run(Interaction: Interaction) {
		if (Interaction.inGuild() && Interaction.type === InteractionType.ApplicationCommand)
			container.logger.info(
				`Gateway: ${Interaction.user.tag} ran ${Interaction.commandName} in ${
					container.client.guilds.cache.get(Interaction.guildId!)?.name
				}.`
			);
	}
}
