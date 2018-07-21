const config = require('./Configuration/config.js')

module.exports = (msg, client) => {
    let handler = {};
    handler.status = "start-up";
    
    if (handler.status === "start-up") {
        if(!client.DB.get(msg.guild.id)) {
            client.DB.set(msg.guild.id, config.bot.defaultDBConfig);
        }
    }
    
};
