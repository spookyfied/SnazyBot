const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const embed = new Discord.RichEmbed()

let botembed = new Discord.RichEmbed()
  .setDescription("Bot Info")
  .setColor("#f44e42")
  .addField("Bot Name", bot.user.username)

  return message.channel.send(botembed);

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
