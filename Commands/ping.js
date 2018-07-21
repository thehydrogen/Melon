module.exports = (msg, client) => {
    msg.channnel.send(":ping_pong: Pong?").then(ctx => {
        ctx.edit(`:ping_pong: Pong!\n:heartbeat: **Heartbeat:** \`${client.ping}ms\`\n:notepad_spiral: **Message Edit:** \`${ctx.createdTimestamp - msg.createdTimestamp}\``)
    })
};
