const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flag')
		.setDescription('Flag?'),
	async execute(interaction) {
		return interaction.reply("Nice try, but it's not here!");
	},
};
