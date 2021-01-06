require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Connor has arrived to the battlefield');
});

const BOT_PREFIX = 'cnr';
const REACTOR = 'REACTOR';
const url = 'https://www.youtube.com/playlist?list=PL8Y-l_mD8PwUn0FY-MNR9yAEhytJWvWpI';

const REACTORME = (member) => {
	member.roles.add('794860377917620224');
};

client.on('message', (msg) => {
	switch (msg.content) {
		case 'Charles Lee is here':
			msg.reply('where is he??');
			break;
		case `${BOT_PREFIX} ${REACTOR}`:
			REACTORME(msg.member);
			break;
		case `${BOT_PREFIX} p`:
			const channel = client.channels.cache.get('794859641627869185');
			if (!channel) return console.error('The channel does not exist!');
			channel
				.join()
				.then((connection) => {
					msg.channel.send(`;;shuffle`);
					msg.channel.send(`;;play ${url}`);
				})
				.catch((e) => {
					// Oh no, it errored! Let's log it to console :)
					console.error(e);
				});
			break;
	}
});

client.login(process.env.BOT_TOKEN);
