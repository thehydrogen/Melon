exports.run = (client, msg, args) => {

    let game = args.join(" ")

   let maintainers = ["327864603788967948", "328816161028571136", "357911279312306176"]; 
     if(!maintainers.includes(msg.author.id)) return msg.channel.send({embed: {
        color: 0xff0000,
         title: `:no_entry: Oops!`,
            description: `You don't have permission to use this command. You need to be **Bot Developer** in order to use this command!`,
            }
        });
        client.user.setActivity(`${game}`)
        msg.channel.send({embed: {
            color: 0x00ff00,
            title: `:white_check_mark: Success!`,
            description: `Changed game status to **${game}**`,
            }
        });
    }

config: {}