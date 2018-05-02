const Discord = require("discord.js");
const weather = require("weather-js");

exports.run = (client, msg, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
      if (err) msg.channel.send(err);

      if (result.length === 0) {
          msg.channel.send({embed: {
            color: 0xff0000,
            title: `:x: Error!`,
            description: `Invalid location! Please enter a valid location!`,
            }
        });
        return;
        
      }

      var current = result[0].current;
      var location = result[0].location;

msg.channel.send({embed: {
    color: 0xd45555,
    title: `:white_sun_small_cloud: Weather for ${current.observationpoint}.`,
    description: `**${current.skytext}**`,
    thumbnail: {
        url: current.imageUrl
         },
      fields: [{
        name: "Temperature",
        value: `**Current temperature**: ${current.temperature} degress \n**Feels like**: ${current.feelslike} degress`,
        inline: true
      },
      {
        name: "Degree Type",
        value: `${location.degreetype}`,
        inline: true
      },
      {
        name: ":clock3: Timezone",
        value: `GMT${location.timezone}`,
        inline: true
      },
      {
        name: ":droplet: Humidity",
        value: `${current.humidity}%`,
        inline: true
      },
      {
        name: ":wind_chime: Winds",
        value: `${current.winddisplay}`,
        inline: true
      },
    ],
    }
});

    });
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}