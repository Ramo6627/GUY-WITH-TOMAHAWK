require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Connor has arrived to the battlefield');
});

const BOT_PREFIX = 'cnr';
const REACTOR = 'REACTOR';

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
	}
});

client.login(process.env.BOT_TOKEN);
