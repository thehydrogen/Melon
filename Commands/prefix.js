module.exports = (msg, client) => {
    if (msg.member.hasPermission("MANAGE_GUILD")) {
        if (msg.suffix) {
            let guild = client.DB.get(msg.guild.id)
            guild.prefix = msg.suffix;
            client.DB.set(msg.guild.id, guild);
            msg.channel.send({
                embed: {
                    title: `Success!`,
                    description: `Your prefix has been changed to \`${msg.suffix}\``,
                    color: 0x00ff00
                }
            })
        } else {
            msg.channel.send({
                embed: {
                    title: `Error!`,
                    description: `\`prefix\` is a required argument that is missing.`,
                    color: 0xff0000
                }
            })
        }
    } else {
        msg.channel.send({
            embed: {
                title: `Error!`,
                description: `This command is a higher rank than you.`,
                color: 0xff0000
            }
        })
    }
};
