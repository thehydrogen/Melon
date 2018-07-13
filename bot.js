
console.log("[boot] Booting up... If you're stuck at this screen, something has gone wrong.")

// Imports
const fs = require("fs");
const Discord = require("discord.js");
const random = require("random-animal");
const weather = require("weather-js");
const client = new Discord.Client();
const config = require("./Configuration/auth.json");
const embed = new Discord.RichEmbed();

client.on('ready', () => { 	
    console.log(`[boot] Weehoo! I've connected to Discord as ${client.user.usernmae} (${client.user.id}).`);
    client.user.setActivity(config.bot.user.game);
});

client.on("guildCreate", guild => {
  console.log(`[guildCreate] I've just been added to a new guild! Here's all the info about it:\n           Owner: ${guild.owner.user.tag} | Members: ${guild.memberCount} | Name: ${guild.name}`);
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
