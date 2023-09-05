const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Hi, welcome to our channel!');
	},
};