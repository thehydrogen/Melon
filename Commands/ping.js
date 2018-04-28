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

    msg.channel.send(`Please wait until we check the bot's latency...`).then(function(m) {
        m.edit({embed: {
            color: 0xd45555,
            author: {
              name: "Melon",
              icon_url: client.user.avatarURL
            },
            description: `:ping_pong: **Melon** v1.0 by BriciWorld, Casbas 234, and Hydrogen, is running for ${format(uptime)}. Serving ${client.users.size} users in ${client.guilds.size} servers. :dizzy:`,
            footer: {
              text: `This took me ${m.createdTimestamp - msg.createdTimestamp}ms`
                }
            }
        });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    })
};
  config: {}
