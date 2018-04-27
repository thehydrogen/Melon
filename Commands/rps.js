exports.run = (client, msg, args) => {
    var rpsArray = [
        `Rock :black_circle:`,
        `Paper :page_facing_up:`,
        `Scissors :scissors:`
    ]
    var rps = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    msg.channel.send({embed: {
            color: 0x00ff00,
            title: `I choose...`,
            description: rps.toString(),
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}
