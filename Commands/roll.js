const Discord = require("discord.js");

exports.run = (client, msg, args) => {

responses = [
        "1", 
        "2",
        "3",
        "4",
        "5",
        "6",
    ];

    let embed = new Discord.RichEmbed()
    .setTitle(":game_die: The roll dies...")
    .setColor("#00ff00")
    .setDescription(`The roll shows **${(responses[Math.floor(Math.random() * responses.length)])}**`)
    msg.channel.send(embed);
}
  config: {}