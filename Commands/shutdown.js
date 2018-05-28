exports.run = (client, msg, args) => {

    let maintainers = ["", ""]; 
    if(!maintainers.includes(msg.author.id)) return msg.channel.send({embed: {
        color: 0xff0000,
         title: `:no_entry: Oops!`,
            description: `You don't have permission to use this command. You need to be **Bot Host** in order to use this command!`,
            }
        });

        msg.channel.send({embed: {
                color: 0xFFFF00,
                title: `:wave: Goodbye!`,
                description: `Melon is shutting down...`,
            }
        }).then(msg => process.exit());
    }
config: {}
