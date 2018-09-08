exports.run = (client, msg) => {
    msg.delete()
    msg.channel.send(msg.suffix);
};
