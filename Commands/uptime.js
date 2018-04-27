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
        color: 0xd45555,
      title: ":clock3: Uptime",
        description: `${client.user.username} is running for ${format(uptime)}.`,
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}