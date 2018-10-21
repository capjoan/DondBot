//We're going to be using javascript for this, also check out the extensions of visual studio code, because they're very handy and makes it easier for your to code!
// The round thing above means it's not saved, always save your work after you have written some code, else the bot might not work :3
//Okay so I put my token is the token.json file which I won't show you lol

//Let's start coding!

const Discord = require("discord.js"); //This basically tells that it needs discord.js
const botconfig = require("./botconfig.json") //Refers to our botconfig file we just made
const token = require("./token.json"); //Refers to our token.json file we just made which the token is in

const bot = new Discord.Client(); //This makes our bot a new client on discord


bot.on("ready", async => { //This will run as soon as the bot went online, I want it to log that's it's online
    console.log("I am online boss!");
});

//We can now test if our bot goes online!
//So it is online now, but it doesn't do anything yet :/

//I am going to make a little test command for this episode

bot.on("message", async message => {
    if(message.content === "ping"){
        message.channel.send("pong!");
    }
});


//This must always be all the way down
bot.login(token.token);