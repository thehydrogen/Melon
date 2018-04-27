const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    msg.channel.send({embed: {
        color: 0xd45555,
        author: {
          name: "Melon",
          icon_url: client.user.avatarURL
        },
        description: `:hammer: **Project Lead**: BriciWorld#1434`,
        fields: [{
            name: "APIs",
            value: `[Random Cat](http://random.cat) \n[Random Dog](http://random.dog)`,
           inline: true
          },
          {
            name: "Developers",
            value: `Casbas 234#5853 and Hydrogen#0002`,
            inline: true
          },
        ],
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
 
};
  config: {}
