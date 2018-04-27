const Discord = require("discord.js");

exports.run = (client, msg, args) => {
msg.channel.send({embed: {
    color: 0xd45555,
    title: `:desktop: Server information:`,
    thumbnail: {
      url: msg.guild.iconURL
       },
      fields: [{
        name: "Server name",
        value: `${msg.guild.name}`
      },
      {
        name: "Created",
        value: `${msg.guild.createdAt}`
      },
      {
        name: "Member count",
        value: `${msg.guild.memberCount}`,
        inline: true
      },
      {
        name: "Server Owner",
        value: `@**${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}**`,
        inline: true
      },
      {
        name: "Server Region",
        value: `${msg.guild.region}`,
        inline: true
      },
      {
        name: ":id:",
        value: `${msg.guild.id}`,
        inline: true
      },
    ],
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}