import { Events, Listener, type CommandDoesNotHaveContextMenuCommandHandlerPayload } from '@sapphire/framework';
import { blockQuote, inlineCode, italic, MessageFlags } from 'discord.js';

export class InteractionFallbackListener extends Listener<typeof Events.CommandDoesNotHaveContextMenuCommandHandler> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.CommandDoesNotHaveContextMenuCommandHandler,
		});
	}

	public async run(payload: CommandDoesNotHaveContextMenuCommandHandlerPayload) {
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
