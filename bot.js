const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MTE0ODIyOTY2MzIxNTMzMzQzNg.G9yHEX.rTVAAL_7kTU2N01XdSE_ThOswzQhZJZsRkBamg';

const { google } = require('googleapis');
const customsearch = google.customsearch('v1');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', (member) => {
  const welcomeChannel = member.guild.channels.cache.find((channel) =>
    channel.name === 'welcome'
  );

  if (welcomeChannel) {
    welcomeChannel.send(`Welcome to the server, ${member.user}! \n\n What are you looking for today?`);
  }
});

// Create a command to run a Google search
client.on('message', async (message) => {
  if (message.content.startsWith('!google')) {
    // Extract the query from the user's message
    const query = message.content.slice(8);

    // Perform the Google search
    try {
      const response = await customsearch.cse.list({
        cx: '275f598fe82c5404a',
        q: query,
      });

      const searchResults = response.data.items;
      if (searchResults && searchResults.length > 0) {
        const result = searchResults[0];
        const searchTitle = result.title;
        const searchLink = result.link;
        message.channel.send(`Here's the top Google search result for "${query}":\n${searchTitle}\n${searchLink}`);
      } else {
        message.channel.send(`No results found for "${query}".`);
      }
    } catch (error) {
      console.error('Error performing Google search:', error);
      message.channel.send('An error occurred while searching.');
    }
  }
});

client.login(token);
