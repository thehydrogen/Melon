const fs = require("fs");

const Discord = require("discord.js");
const random = require("random-animal");
const weather = require("weather-js");
const client = new Discord.Client();
const config = require("./Configuration/auth.json");
const embed = new Discord.RichEmbed();

client.on('ready', () => { 	
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Serving in ${client.guilds.size} servers, with ${client.users.size} users on ${client.channels.size} channels`)
    client.user.setStatus(`online`)
    client.user.setActivity(config.game,  { type: 'STREAMING', url: `https://twitch.tv/bwtech` });
});

client.on("guildCreate", guild => {
  console.log(`I've been added to ${guild.name}. I am in ${client.guilds.size} servers now!`);
});

client.on("guildDelete", guild => {
  if(!guild.available) return;
  console.log(`I've left: ${guild.name}. This could've been because I was kicked, banned, or the server was deleted.`);
});

client.on("message", msg => {
    if (msg.author.bot) return;
    if(msg.content.indexOf(config.prefix) !== 0) return;
  
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./Commands/${command}.js`);
      commandFile.run(client, msg, args);
    } catch (err) {
      console.error(err);
    }
  });

client.login(config.token);
