exports.run = (client, msg, args) => {

   let maintainers = ["", "", ""]; 
     if(!maintainers.includes(msg.author.id)) return msg.channel.send({embed: {
        color: 0xff0000,
         title: `:no_entry: Oops!`,
            description: `You don't have permission to use this command. You need to be **Bot Developer** in order to use this command!`,
            }
        });
        client.user.setActivity(`Type +help | v1.1`,  { type: 'STREAMING', url: `https://twitch.tv/briciworld` });
        msg.channel.send({embed: {
            color: 0x00ff00,
            title: `:white_check_mark: Success!`,
            description: `The game status has been reset!`,
            }
        });
    }

config: {}
