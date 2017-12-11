const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: '真夏の夜の淫夢', type: 2 } });
});

client.on('message', message => {
    if (message.content === "hello"){
        message.reply("hello");
    }
    if (message.content.equals("何でもします")) {
    	message.reply("今何でもするって言ったよね？");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
