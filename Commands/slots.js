const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    responses = [
        ":soccer: | :cd: | :cat: \n:green_apple: | :cat: | :green_apple: \n:tennis: | :map: | :dvd:", 
        ":package: | :dog: | :basketball: \n:dvd: | :map: | :dvd: \n :apple: | :cd: | :package:",
        ":cd: | :cat: | :tennis: \n:tennis: | :green_apple: | :tennis: \n:package: | :cat: | :cd:",
        ":dvd: | :dog: | :map: \n:soccer: | :package: | :package: \n:dvd: | :green_apple: | :dog:",
    ];


    msg.channel.send({embed: {
        color: 0xd45555,
        title: "Playing the slots...",
        description: (responses[Math.floor(Math.random() * responses.length)]),
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
 
};
  config: {}
