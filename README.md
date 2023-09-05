# discordBot

## Introduction
This is an interactive Discord bot built using Discord.js. The bot responds to user commands and interactions in a Discord server.

## Features

Command Handling: The bot can recognize and respond to specific commands triggered by users.

Interactive Responses: It can engage users with interactive messages and collect responses.

## Setup

Clone the Repository: Clone this repository to your local machine:

git clone https://github.com/Thomasosho/discordBot.git

Install Dependencies: Install the required dependencies using npm (Node Package Manager):
```
npm install
```

Bot Token: Create a new Discord bot on the Discord Developer Portal, and obtain your bot token.

Configuration: Create a file called config.json in the root directory of your application and add your bot token
```
{
	"token": "your-token-goes-here",
}
```

Add two more properties to your config.json file:

clientId: Your application's client id (Discord Developer Portal > "General Information" > application id)
guildId: Your development server's id (Enable developer mode > Right-click the server title > "Copy ID")
```
{
	"token": "your-token-goes-here",
	"clientId": "your-application-id-goes-here",
	"guildId": "your-server-id-goes-here"
}
```

Run the Bot: Start the bot using Node.js:
```
node bot.js
```

## Commands
/ping: Check if the bot is online.
/jump: The bot returns jumped
/user: The bot returns details about the user that ran the command.
/server: The bot returns the details about the server you and the bot are on including the number of users on the server
/age: The bot returns a message to you guessing your age 


## Authors

Tomas Osho
Saleem Jibril
Hammed Tiamiyu



