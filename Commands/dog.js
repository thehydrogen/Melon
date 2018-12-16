const random = require("random-animal");

module.exports = (msg, client) => {
    random.dog().then(url => {
        msg.channel.send({
            embed: {
                color: 0xd45555,
                title: ':dog: Woof',
                image: {
                    url
                }
            }
        });
    });
}