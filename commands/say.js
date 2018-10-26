const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}
RichEmbed:
module.exports.help = {
  name: "say"
}

message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});
