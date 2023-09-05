const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("age")
    .setDescription("Guesses a user's age."),
  async execute(interaction) {
    const min = 20;
    const max = 32;

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `Hello ${interaction.user.username}, My guess is you're ${randomNum} years old`
    );
  },
};
