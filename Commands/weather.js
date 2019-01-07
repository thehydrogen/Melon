const weather = require('weather-js');

module.exports = (msg, client) => {
    if (msg.suffix) {
        let suffix = msg.suffix

        weather.find({ search: suffix, degreeType: 'C' }, (err, result) => {
            if (!err) {
                if (result.length !== 0) {
                    let current = result[0].current;
                    let location = result[0].location;

                    msg.channel.send({
                        embed: {
                            title: `:white_sun_small_cloud: Weather for ${current.observationpoint}.`,
                            description: `**${current.skytext}**`,
                            fields: [
                                {
                                    name: ':thermometer: Temperature',
                                    value: `${current.temperature} degrees`
                                },
                                {
                                    name: ':thermometer: Feels Like',
                                    value: `${current.feelslike} degrees`
                                },
                                {
                                    name: ':clock3: Timezone',
                                    value: `GMT${location.timezone}`
                                },
                                {
                                    name: ':droplet: Humidity',
                                    value: `${current.humidity}%`,
                                },
                                {
                                    name: ':wind_chime: Winds',
                                    value: `${current.winddisplay}`,
                                }
                            ],
                            color: 0xdca741
                        }
                    })
                } else {
                    msg.channel.send({
                        embed: {
                            title: ':x: Invalid location',
                            description: 'The location you entered was invalid.',
                            color: 0xff0000,
                            footer: {
                                text: 'Check for any typos or misspellings.'
                            }
                        }
                    })
                }
            } else {
                msg.channel.send({
                    embed: {
                        title: ':x: Something went wrong.',
                        description: 'It seems something went wrong while executing this command.',
                        color: 0xff0000,
                        footer: {
                            text: 'Sorry about that.'
                        }
                    }
                })
            }
        })
    } else {
        msg.channel.send({
            embed: {
                title: ':x: You\'re missing required arguments.',
                description: 'Please tell me what location you want the weather for.',
                color: 0xff0000,
                footer: {
                    text: 'If you believe this is a mistake, please contact the bot\'s maintainers.'
                }
            }
        })
    }
};