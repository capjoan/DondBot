const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
let name = args[0];
if(!args[0]) return message.reply("You didn't enter your name!");
let age = args[1];
if(!args[1]) return message.reply("You didn't enter your age"); //Checks if there is an age and if there is not say that
if(isNaN(args[1])) return message.reply("An age can't be something else then a number!"); //Checks if the age is Not a Number (NaN)
let country = args[2];
if(!args[2]) return message.reply("You didn't enter your country!");

let dateEmbed = new Discord.RichEmbed()
.setTitle("**😄 Someone asked me on a date! 😄 **")
.setDescription("Here is some information about the person:")
.addField("Their name", `${name}`)
.addField("Their age", `${age}`)
.addField("Their country", `${country}`)
.setTimestamp()
.setColor("#FFFF00")
.setThumbnail(client.user.displayAvatarURL)
.setFooter("Also want a date? Type -date <name> <age> <country>");

message.channel.send(dateEmbed); 
}

module.exports.help = {
	"name": "date",
	"aliases": []
}