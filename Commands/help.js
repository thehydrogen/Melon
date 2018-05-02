const Discord = require("discord.js");

exports.run = (client, msg, args, config) => {
    

let embed = new Discord.RichEmbed()
       
.setAuthor("Melon", client.user.avatarURL)
.setColor("#d45555")
.setDescription("Here you can see the commands for Melon!")
.addField(`+help`, "Shows this list")
.addField(`+rps`, "Play rock, paper, scissors!")
.addField(`+8ball`, "Ask something to the magic 8ball. Usage: `+8ball <question>`")
.addField(`+ping`, "Shows the latency ping")
.addField(`+serverinfo`, "Displays information of the current server")
.addField(`+avatar`, "Shows your avatar. Usage: `+avatar [user mention]`")
.addField(`+info`, "Displays information of this bot")
.addField(`+cat`, "Shows a random cat (API broken)")
.addField(`+dog`, "Shows a random dog")
.addField(`+say`, "Says something to the chat! Usage: `+say <text>`")
.addField(`+credits`, "Shows all Melon developers and APIs the bot is using")
.addField(`+uptime`, "Displays bot's uptime")
.addField(`+slots`, "Play the slots!")
.addField(`+embed`, "Says something to the chat, but this time with embed! Usage: `+embed <text>`")
.addField(`+profile`, "Displays information of your account")
.addField(`+roll`, "Roll dice!")
.addField(`+channelinfo`, "Displays information of the current channel")
.addField(`+weather`, "Displays weather for the selected location. Usage: `+weather <location>`")

msg.author.send(embed);
msg.channel.send({embed: {
        color: 0xd45555,
        title: `Check DMs :mailbox:`,
        }
    });
}
config: {}
