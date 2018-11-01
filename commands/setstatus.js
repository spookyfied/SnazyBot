const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "488105104348676097") return message.channel.send("You may not use this command because you're not a developer.");

if(args[1] == "online") return bot.user.setStatus("online");

if(args[1] == "dnd") return bot.user.setStatus("dnd");

if(args[1] == "invisible") return bot.user.setStatus("invisible");

if(args[1] == "idle") return bot.user.setStatus("idle");

}
