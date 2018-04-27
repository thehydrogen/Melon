const fs = require("fs");

var userData = JSON.parse(fs.readFileSync("./userData.json", "utf8"));

const Discord = require("discord.js");
const random = require("random-animal");
const client = new Discord.Client();
const config = require("./Configuration/auth.json");
const embed = new Discord.RichEmbed();

client.on('ready', () => { 	
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Serving in ${client.guilds.size} servers, with ${client.users.size} users on ${client.channels.size} channels`)
    client.user.setStatus(`online`)
    client.user.setActivity(`Type +help | v0.6b`,  { type: 'STREAMING', url: `https://twitch.tv/twitch` });
});

fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.log(err);
})

client.on("guildCreate", guild => {
  console.log(`I've been added to ${guild.name}. I am in ${client.guilds.size} servers now!`);
});

client.on("guildDelete", guild => {
  console.log(`I've been kicked from ${guild.name}. I am in ${client.guilds.size} servers now!`);
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