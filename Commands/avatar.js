exports.run = (client, msg, args) => {
    const user = msg.mentions.users.first()
    
    if(user) {
        msg.channel.send({embed: {
        color: 0x00ff00,
            title: `:frame_photo: ${user.username}'s Avatar`,
            description: `Image isn't loading? [Click here](${user.avatarURL})`,
            image: {
                url: user.avatarURL
            },
            }
        });
    } else {
    msg.channel.send({embed: {
        color: 0x00ff00,
            title: `:frame_photo: Your Avatar`,
            description: `Image isn't loading? [Click here](${msg.author.avatarURL})`,
            image: {
                url: msg.author.avatarURL
            },
            }
        });
    }
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
