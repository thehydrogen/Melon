const config = require('../Configuration/config');

module.exports = (client, msg) => {
    let suffix = msg.suffix;
    
    if (config.bot.maintainers.includes(msg.author.id)) {
        if (suffix) {
            try {
                var evaled = eval(suffix);

                if (typeof evaled !== "string")
                    evaled = require('util').inspect(evaled);

                if (evaled.includes(client.token)) {
                    return msg.channel.send('You can\'t evaluate the token!!!!!!!!')
                }

                if (evaled.length > 2000) {
                    return require('snekfetch').post('https://hastebin.com/documents', { data: evaled }).then(result => {
                        if(!result.body.key) {
                            msg.channel.send(":x: Something went wrong while posting to the Hastebin API.")
                        } else {
                            msg.channel.send(`The output was too long, so I posted to Hastebin: [Click Here](https://hastebin.com/${result.body.key})`);
                        }
                    })
                }

                msg.channel.send({ embed: { description: `\`\`\`${evaled}\`\`\``, color: 0x00ff00 } });
            } catch(e) {
                msg.channel.send({ embed: { description: `\`\`\`${e}\`\`\``, color: 0xff0000 } });
            }
        } else {
            msg.channel.send('What should I evaluate?')
        }
    } else {
        msg.channel.send('Access Denied')
    }
}
