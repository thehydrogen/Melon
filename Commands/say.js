exports.run = (client, msg, args) => {
    let text = args.join(" ");
    msg.delete()
    msg.channel.send(text);
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
  config: {}