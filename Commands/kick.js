module.exports = (msg, client) => {
    if (msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
        if (msg.member.roles.some(r => ['Staff'].includes(r.name))) {
            if (msg.mentions.users.first()) {
                const user = msg.mentions.users.first();
                const member = msg.guild.member(user);

                if (member.kickable) {
                    member.kick();
                    msg.channel.send({
                        embed: {
                            title: ':ok_hand: Kick completo.',
                            description: `**${user.tag}** has been kicked.`,
                            color: 0x00ff00,
                            footer: {
                                text: 'Venus'
                            }
                        }
                    })
                } else {
                    msg.channel.send({
                        embed: {
                            title: ':x: I\'m missing permissions.',
                            description: 'I can\'t kick this person.',
                            color: 0xff0000,
                            footer: {
                                text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
                            }
                        }
                    })
                }
            } else {
                msg.channel.send({
                    embed: {
                        title: ':x: You\'re missing required arguments.',
                        description: 'Who shall recieve the kickhammer?',
                        color: 0xff0000,
                        footer: {
                            text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
                        }
                    }
                })
            }
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
    } else {
        msg.channel.send({
            embed: {
                title: ':x: I\'m missing permissions.',
                description: 'I don\'t have permission to kick members in this server.',
                color: 0xff0000,
                footer: {
                    text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
                }
            }
        })
    }
}