import { Events, Listener, type CommandDoesNotHaveChatInputCommandHandlerPayload } from '@sapphire/framework';
import { blockQuote, inlineCode, italic, MessageFlags } from 'discord.js';

export class InteractionFallbackListener extends Listener<typeof Events.CommandDoesNotHaveChatInputCommandHandler> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.CommandDoesNotHaveChatInputCommandHandler,
		});
	}

	public async run(payload: CommandDoesNotHaveChatInputCommandHandlerPayload) {
		return await payload.interaction.reply({
			content: blockQuote(
				italic(
					`Sorry, I couldn't find a handler to use to respond to ${inlineCode(`/${payload.context.commandName}`)}, my apologies!`
				)
			),
			flags: [MessageFlags.Ephemeral],
		});
	}
}
