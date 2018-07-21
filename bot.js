
console.log("[boot] Booting up... If you're stuck at this screen, something has gone wrong.");

disabledEvents = ["message"];

// Imports
const fs = require("fs");
const Discord = require("discord.js");
const random = require("random-animal");
const weather = require("weather-js");
const client = new Discord.Client();
const config = require("./Configuration/config.js");
const auth = require("./Configuration/auth.js");
const embed = new Discord.RichEmbed();

client.on('ready', () => { 	
    console.log(`[boot] Weehoo! I've connected to Discord as ${client.user.usernmae} (${client.user.id}).`);
    
    game = config.bot.user.game.replace("{bot_name}", client.user.username).replace("{guilds_size}", client.guilds.size)
    client.user.setActivity(config.bot.user.game);
    
    let status = config.bot.user.status;
    switch (status) {
        case 1:
            status = "ONLINE";
            break;
        case 2:
            status = "AWAY";
            break;
        case 3:
            status = "DND";
            break;
        default:
            status = "ONLINE";
            console.log("[status_err] The status you've chosen in your configuration file could not be recognazied. I have defaulted to ONLINE.");
            break;
    }
    
    client.user.setStatus(status);
})

client.on("guildDelete", guild => {
    if (disabledEvents.includes("guildDelete")) return;
    if(!guild.available) return;
    console.log("I've left a guild.");
});

client.on("message", msg => {
    if (disabledEvents.includes("message")) return;
});

client.login(auth.discord.token);
