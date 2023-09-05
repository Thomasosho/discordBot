const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Replies with Jumped!'),
	async execute(interaction) {
		await interaction.reply('Jumped!');
	},
};