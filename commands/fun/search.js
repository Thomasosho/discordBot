const { SlashCommandBuilder } = require("discord.js");
const { google } = require("googleapis");
const { key, searchID } = require("../../config.json");

const customsearch = google.customsearch("v1");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("c3helper")
    .setDescription("Searches using Google and provides search results.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Enter your search query.")
        .setRequired(true)
    ), // 'query' is a required string option
  async execute(interaction) {
    // Get the search query from the user's interaction
    const searchQuery = interaction.options.getString("query");

    // Check if a search query was provided
    if (!searchQuery) {
      return interaction.reply("Please provide a search query.");
    }

    // Google Search API parameters
    const params = {
      q: searchQuery,
      key: key,
      cx: searchID,
    };

    try {
      // Perform the Google Search
      const response = await customsearch.cse.list(params);

      // Extract and format search results
      const searchResults = response.data.items.map((item, index) => {
        return `${index + 1}. [${item.title}](${item.link})\n${item.snippet}\n`;
      });

      // Assuming 'searchResults' is an array of search result strings
      const limitedResults = searchResults.slice(0, 5); // Limit to the first 5 results

      // Send the limited results as a message
      await interaction.reply(limitedResults.join("\n"));

      if (searchResults.length > 5) {
        await interaction.followUp(
          "There are more search results. Use your browser to see more results."
        );
      }
    } catch (error) {
      console.error("Error searching Google with your queryString. Please try again later:", error);
      await interaction.reply("An error occurred while searching Google.");
    }
  },
};
