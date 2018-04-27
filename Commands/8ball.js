   const Discord = require("discord.js");

exports.run = (client, msg, args) => {

responses = [
        "It is certain", 
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again", 
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it", 
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "Why?",
        "You shouldn't know",
        "You should know",
    ];

    if (args.length < 1) return msg.reply(":no_entry: **You need to ask something to the 8ball!**");


    let embed = new Discord.RichEmbed()
    .setTitle(":8ball: The 8ball replied:")
    .setColor("#00ff00")
    .setDescription((responses[Math.floor(Math.random() * responses.length)]))
    msg.channel.send(embed);
}
  config: {}
