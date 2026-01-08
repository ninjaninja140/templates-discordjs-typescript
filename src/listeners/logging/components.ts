import { container, Events, Listener } from '@sapphire/framework';
import { ComponentType, type Interaction, InteractionType } from 'discord.js';

export class InteractionListener extends Listener<typeof Events.InteractionCreate> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.InteractionCreate,
		});
	}

	public async run(Interaction: Interaction) {
		if (Interaction.inGuild() && Interaction.type === InteractionType.MessageComponent) {
			let type = 'component';
			switch (Interaction.componentType) {
				case ComponentType.Button:
					type = 'button';
					break;
				case ComponentType.ChannelSelect:
					type = 'channel selector';
					break;
				case ComponentType.RoleSelect:
					type = 'role selector';
					break;
				case ComponentType.StringSelect:
					type = 'string selector';
					break;
				case ComponentType.UserSelect:
					type = 'user selector';
					break;
				case ComponentType.MentionableSelect:
					type = 'mention selector';
					break;
				default:
					break;
			}

			container.logger.info(
				`Gateway: ${Interaction.user.tag} submitted ${type} ${Interaction.customId} in ${
					container.client.guilds.cache.get(Interaction.guildId!)?.name
				}.`
			);
		}
	}
}
