const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    let text = args.join(" ");
    msg.delete(),
msg.channel.send({embed: {
    color: 0xd45555,
    author: {
        name: msg.author.username + " says...",
        icon_url: msg.author.avatarURL
      },
description: text,
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}