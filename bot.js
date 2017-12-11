const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('Online')
    client.user.setPresence({ game: { name: '真夏の夜の淫夢', type: 1 });
});

client.on('message', message => {
    if (message.content.startsWith("何でもします") || message.content.startsWith("なんでもします")) {
    	message.reply("今何でもするって言ったよね？");
  	}
});

client.login(process.env.BOT_TOKEN);
