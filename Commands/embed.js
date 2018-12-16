module.exports = (msg, client) => {
    if (msg.member.roles.some(r=>["Staff"].includes(r.name))) {
        let suffix = msg.suffix;
        msg.delete();
        msg.channel.send({embed: {
            color: 0xd45555,
            author: {
                name: msg.author.username + 'says',
                icon_url: msg.author.avatarURL
            },
            description: text,
            }
        });
    } else {
        msg.channel.send({
            embed: {
                title: ':raised_hand: This command requires a higher rank than you.',
                description: 'The command you have attempted to execute requires a higher rank than you currently have.',
                color: 0xff0000,
                footer: {
                    text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
                }
            }
        })
    }
};