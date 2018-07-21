const config = require('./Configuration/config.js')

module.exports = (msg, client) => {
    if(!client.DB.get(msg.guild.id)) {
        client.DB.set(msg.guild.id, config.bot.defaultDBConfig);
    }
    
    let prefix;
    prefix = client.DB.get(msg.guild.id).prefix;
    
    if(!msg.content.startsWith(prefix)) return;
    
    
    let cmd = msg.content.split(" ")[0].trim().toLowerCase().replace(prefix, "");
	let suffix = msg.content.split(" ").splice(1).join(" ")
        .trim();
    
    const cmdFile = require(`./Commands/${cmd}.js`);
    
    msg.suffix = suffix;
    
    cmdFile(msg, client)/*.catch(err => {
        config.bot.maintainers.forEach(m => client.users.get(m).send({
            embed: {
                title: client.user.username + "has encountered an error",
                description: `I have encountered an error, and the execution of the command \`${cmd}\` in \`${msg.guild.name} (${msg.guild.id})\` was canceled. Below you'll find what happened:\n\`\`\`js\n${err}\`\`\``,
                footer: {
                    text: `This is an automated message, you've been sent this as you're marked a maintainer.`
                }
            }
        }))
    });*/
};
