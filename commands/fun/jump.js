const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jumo')
		.setDescription('Replies with Jumped!'),
	async execute(interaction) {
		await interaction.reply('Jumped!');
	},
};