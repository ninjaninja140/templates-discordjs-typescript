import { container, Events, Listener } from '@sapphire/framework';
import { blockQuote, inlineCode, italic, type Interaction } from 'discord.js';

// Fix this at some point, its pretty scuffed and tries to reply even if the modal exists :/

export class InteractionFallbackListener extends Listener<typeof Events.InteractionCreate> {
	public constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			event: Events.InteractionCreate,
			enabled: false,
		});
	}

	public async run(interaction: Interaction) {
		if (!interaction.isModalSubmit()) return;

		const possibleStores = [container.stores.get('interaction-handlers')].filter(Boolean);

		let hasHandler = false;

		for (const store of possibleStores) {
			if (store!.has(interaction.customId)) {
				hasHandler = true;
				break;
			}

			if (Array.from(store!.keys()).some((key) => String(key).endsWith(interaction.customId))) {
				hasHandler = true;
				break;
			}
		}

		if (!hasHandler)
			try {
				if (!interaction.replied && !interaction.deferred)
					await interaction
						.editReply({
							content: blockQuote(
								[
									`Sorry, I couldn't find a handler to use to respond to ${inlineCode(`modal:${interaction.customId}`)}, my apologies!`,
									'The functionality behind this modal may be coming in the future, so please be patient!',
								]
									.map(italic)
									.join('\n')
							),
						})
						.catch(void 0);
			} catch {}
	}
}
