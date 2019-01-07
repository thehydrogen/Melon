module.exports = (msg, client) => {
    responses = [
        'It is certain', 
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again', 
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
        'Why?',
        'You shouldn\'t know',
        'You should know',
    ];

    if (msg.suffix.length < 1) return msg.channel.send({
        embed: {
            title: ':x: You\'re missing required arguments.',
            description: 'What shall you ask the magic 8Ball?',
            color: 0xff0000,
            footer: {
                text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
            }
        }
    })


    msg.channel.send({
        embed: {
            title: 'The 8ball replies with...',
            description: (responses[Math.floor(Math.random() * responses.length)]),
            footer: {
                text: 'I hope it was what you wished for.'
            },
            color: 0xdca741
        }
    })
}