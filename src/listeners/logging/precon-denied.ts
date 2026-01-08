import type { ChatInputCommandDeniedPayload, UserError } from '@sapphire/framework';
import { container, Events, Listener } from '@sapphire/framework';

export class ChatInputCommandDeniedListener extends Listener<typeof Events.ChatInputCommandDenied> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.ChatInputCommandDenied,
		});
	}

	public async run(error: UserError, payload: ChatInputCommandDeniedPayload) {
		const { interaction, command } = payload;
		const preconditionName = error.identifier ?? 'Unknown';

		container.logger.warn(
			`Precondition "${preconditionName}" Denied/Failed: ${interaction.user.tag} tried to run ${command.name} in ${
				interaction.guild?.name ?? 'DMs'
			} - Reason: ${error}`
		);
	}
}
