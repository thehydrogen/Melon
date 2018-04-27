exports.run = (client, msg, args) => {

    let code = args.join(" ").slice(1);

    if(msg.author.id !== "") return msg.channel.send({embed: {
        color: 0xff0000,
         title: `:no_entry: Oops!`,
            description: `You don't have permission to use this command. You need to be **Bot Developer** in order to use this command!`,
            }
        });
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        msg.channel.send({embed: {
                color: 0x00ff00,
                description: `\`\`\`xl\n${clean(evaled)}\n\`\`\``,
            }
        });

    } catch (err) {
        msg.channel.send({embed: {
                color: 0xff0000,
                description: `\`\`\`xl\n${clean(err)}\n\`\`\``,
            }
        });
    };

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }}

config: {}
