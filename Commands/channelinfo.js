const Discord = require("discord.js");

exports.run = (client, msg, args) => {

msg.channel.send({embed: {
    color: 0xd45555,
    title: `:hash: Channel information:`,
      fields: [{
        name: "Name",
        value: `${msg.channel.name}`
      },
          {
        name: "Created",
        value: `${msg.channel.createdAt}`
      },
      {
        name: "Channel Type",
        value: `${msg.channel.type}`,
        inline: true
      },
      {
        name: ":id:",
        value: `${msg.channel.id}`,
        inline: true
      },
    ],
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}