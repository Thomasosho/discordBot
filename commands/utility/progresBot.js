const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Hi, welcome to our channel!'),
	async execute(interaction) {
		await interaction.reply('Hi, welcome to our channel!');
	},
};