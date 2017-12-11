const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('Online')
    client.user.setPresence({ game: { name: '何でもしますから！', type: 2 }});
});

client.on('message', message => {
    if (message.content.startsWith("何でもします") || message.content.startsWith("なんでもします")) {
    	message.reply("今何でもするって言ったよね？");
  	}
    if (message.content.startsWith("114514") || message.content.startsWith("１１４５１４")) {
        message.reply("良いよ！来いよ！");
    }
    if (message.content.startsWith("いきすぎ") || message.content.startsWith("イキスギ")) {
        var member= message.mentions.members.first();
        message.reply("イキスギｨ！！　イクイクイク、ｯッ！アッｯ！！" + member);
    }
});

client.login(process.env.BOT_TOKEN);
