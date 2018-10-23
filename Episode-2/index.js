//Let's get started with this!

const Discord = require('discord.js'); //Requires the package: discord.js
const client = new Discord.Client({disableEveryone: true}); //Makes a new discord user and disables the @everyone ping
const botconfig = require('./botconfig.json'); //Requires the botconfig file we just set up
const fs = require('fs'); //Requires the fs package, you don't need to install it because it installed with the Discord.js one

//This will read our command folder, but before we can do that we first need to make two new collections
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection(); //Aliases are other ways to use the command, for example -ban could become -b

fs.readdir('./commands/', (err, files) => {
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js"); //Will look for js files

	if(jsfile.length <= 0){
		console.log('Could not find commands!');
		return;
	}

	jsfile.forEach((f, i) => { //For all js files:
		let props = require(`./commands/${f}`);
		console.log(`${i + 1}: ${f} loaded!`)
		client.commands.set(props.help.name, props);

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		});
	});
});




client.on('ready', async => {
	console.log("I am online daddy!");
});

//We're gonna make a new folder called commands
client.on('message', async message =>{
	let prefix = botconfig.prefix;
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	let command;

	if(!message.content.startsWith(prefix)) return;
	else if (client.commands.has(cmd)) {
		command = client.commands.get(cmd);
	} else if (client.aliases.has(cmd)) {
		command = client.commands.get(client.aliases.get(cmd));
	}
	try {
		command.run(client, message, args);
	} catch (e){
		message.channel.send(`:x: The command \`${cmd}\` couldn't be found`);
	}
});

client.login(botconfig.token) //Logs in with the token that is in the botconfig file