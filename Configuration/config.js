module.exports = {
    bot: {
        user: {
            status: 1, // 1 = Online | 2 = Away | 3 = Do Not Disturb
            game: "{bot_name} - ${guilds_size} servers" // {bot_name} = The bot's name | {guilds_size} = How many servers the bot is in.
        },
        
        // --------
        
        core: { // DO NOT CHANGE ANYTHING IN HERE
            version: "2.3.4",
            build: "12b"
        },
        
        // --------
        
        branch: "2",
        
        // --------
        
        version: "2.0",
        
        // --------
        
        maintainers: ["Insert", "maintainers", "here"],
        
        // --------
        
        defaultDBConfig: {
            prefix: "+",
            // --------
            strikes: {},
            // --------
            welcomeMessages: false,
            welcomeChannel: "general",
            welcomeMessage: "Welcome, {user}!",
            // --------
            leaveMessages: false,
            leaveChannel: "general",
            leaveMessage: "Farewell, {user}.",
            // --------
            eventLogger: true,
            eventLoggerChannel: "logs",
            // --------
            messageLogger: false,
            messageLoggerChannel: "logs"
        }
    }
};
