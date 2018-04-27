const Discord = require("discord.js");

exports.run = (client, msg, args) => {
msg.channel.send({embed: {
    color: 0xd45555,
    title: `:bust_in_silhouette: User information:`,
    thumbnail: {
      url: msg.author.avatarURL
       },
      fields: [{
        name: "Username & Discriminator",
        value: `@**${msg.author.tag}**`
      },
      {
        name: "Created",
        value: `${msg.author.createdAt}`
      },
      {
        name: "Bot?",
        value: `${msg.author.bot}`,
        inline: true
      },
      {
        name: ":id:",
        value: `${msg.author.id}`,
        inline: true
      },
    ],
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}