import { type ChatInputCommandErrorPayload, Events, Listener } from '@sapphire/framework';
import { italic, MessageFlags, quote } from 'discord.js';

export class ChatInputCommandError extends Listener<typeof Events.ChatInputCommandError> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.ChatInputCommandError,
		});
	}

	public async run(error: unknown, { interaction }: ChatInputCommandErrorPayload) {
		this.container.logger.info(typeof error);
		this.container.logger.info(error);

		if (interaction.deferred || interaction.replied)
			return await interaction.editReply({
				content: [quote(italic('An error occured while processing this interaction.'))].join('\n'),
			});

		return await interaction.reply({
			content: [quote(italic('An error occured while processing this interaction.'))].join('\n'),
			flags: [MessageFlags.Ephemeral],
		});
	}
}
