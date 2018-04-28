const Discord = require("discord.js");

exports.run = (client, msg, args) => {
    function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
      }
      
      var uptime = process.uptime();

    msg.channel.send({embed: {
        color: 0x00ff00,
        author: {
          name: "Melon",
          icon_url: client.user.avatarURL
        },
        description: `${client.user.username} - A discord bot that does everything!`,
        fields: [{
            name: "Author",
            value: `BriciWorld#1434`,
           inline: true
          },
          {
            name: "Servers",
            value: `${client.guilds.size}`,
            inline: true
          },
          {
            name: "Users",
            value: `${client.users.size}`,
            inline: true
          },
          {
            name: "Channels",
            value: `${client.channels.size}`,
            inline: true
          },
          {
            name: "Bot version",
            value: `v0.6b`,
            inline: true
          },
          {
            name: "Discord.js version",
            value: `v${Discord.version}`,
            inline: true
          },
          {
            name: "Node.js version",
            value: `${process.version}`,
            inline: true
          },
          {
            name: "Uptime",
            value: `${format(uptime)}`,
            inline: true
          },
          {
            name: "Memory Usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + `MB`,
            inline: true
          },
          {
            name: "Support Server",
            value: `[Join](https://discord.gg/5h86cH9)`,
            inline: true
          },
        ],
        footer: {
          text: `All systems operational`
            }
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
