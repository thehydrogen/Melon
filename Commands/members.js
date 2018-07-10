exports.run = (client, msg, args) => {
     
    msg.channel.send({embed: {
        color: 0xd45555,
        title: `:desktop: This server has...`,
        description: msg.guild.memberCount + " members.",
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
