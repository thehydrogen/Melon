exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x00ff00,
            title: `:frame_photo: Your Avatar`,
            description: `Image not loaded? [Click here](${msg.author.avatarURL})`,
            image: {
                url: msg.author.avatarURL
            },
            }
        });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
