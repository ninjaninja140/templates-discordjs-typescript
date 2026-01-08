import { type ChatInputCommandDeniedPayload, Events, Listener, type UserError } from '@sapphire/framework';
import { inlineCode, italic, MessageFlags, quote } from 'discord.js';

export class ChatInputCommandDenied extends Listener<typeof Events.ChatInputCommandDenied> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.ChatInputCommandDenied,
		});
	}

	public async run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
		return await interaction.reply({
			content: [
				'## Error, command/action was denied.',
				quote(
					`This command was denied or forcibly halted by a precondition check system with this identifier code: ${inlineCode(error.identifier)}`
				),
				quote(italic(error.message)),
			].join('\n'),
			flags: [MessageFlags.Ephemeral],
		});
	}
}
