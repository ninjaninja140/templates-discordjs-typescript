import { type ChatInputCommand, Command } from '@sapphire/framework';

export class SlashCommand extends Command {
	public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName('hello')
				.setDescription('Testing command to verify that the command system is working properly.')
		);
	}

	public override async chatInputRun(interaction: ChatInputCommand.Interaction) {
		const user = interaction.user.id;

		await this.container.client.users.cache.get(user)?.send({ content: 'DM test. (You used /test)' });
		await interaction.reply({
			content: 'Testing reply interaction!',
			ephemeral: true,
		});
	}
}
