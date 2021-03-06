
console.log("[boot] Booting up... If you're stuck at this screen, something has gone wrong.");

disabledEvents = ["guildDelete", "guildCreate"];

// Imports
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client({ disabledEvents });
const config = require("./Configuration/config.js");
const auth = require("./Configuration/auth.js");
const embed = new Discord.RichEmbed();

const Enmap = require("enmap");
const mongo = require("enmap-mongo");
const guilds = new Enmap({ provider: new mongo({ name: "guilds", dbName: "venus" }) });
client.DB = guilds;

guilds.defer.then(() => {
    client.on('ready', () => { 	
        console.log(`[boot] Weehoo! I've connected to Discord as ${client.user.username} (${client.user.id}).`);

        game = config.bot.user.game.replace("{bot_name}", client.user.username).replace("{guilds_size}", client.guilds.size)
        client.user.setActivity(game);

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
        if(!guild.available) return;
        console.log("I've left a guild.");
    });

    client.on("message", msg => {
        require("./CommandHandler.js")(msg, client);
    });

    client.login(auth.discord.token);
});
