module.exports = (msg, client) => {
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
};