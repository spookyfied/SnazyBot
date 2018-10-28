    module.exports.help = {
        name: "help"
    }

const Discord = require("discord.js");

exports.run = async (client, message, args, tools, con) => {
    try {
        await message.author.send(`Commands: \n\n${client.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`);
        message.channel.send("Check your dm's for a list of bot commands.");
    } catch (e) {
        throw e;
    }
}
