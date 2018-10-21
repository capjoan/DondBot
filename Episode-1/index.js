//Let's get started with this!

const Discord = require('discord.js'); //Requires the package: discord.js
const client = new Discord.Client(); //Makes a new discord user
const botconfig = require('./botconfig.json'); //Requires the botconfig file we just set up

client.on('ready', async => {
	console.log("I am online daddy!");
});

client.on('message', async message =>{
	const prefix = botconfig.prefix;
	const args = message.content.slice(prefix.length).trim().split(' ');

	if(message.content === prefix + 'ping'){
		message.channel.send('pong!');
	}

	if(message.content.startsWith(prefix + 'name')){
		let name = args[1];

		message.channel.send(`Hi ${name}`);
	}

	

	//This will define our args if we want to use something with more then one word


});

client.login(botconfig.token) //Logs in with the token that is in the botconfig file
