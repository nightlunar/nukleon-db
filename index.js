console.clear();
console.log('[INFO]: Loading...');
const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Client({
	disableMentions: 'everyone'
});
const moment = require('moment');
const db = require('quick.db');
const fs = require('fs');
require('./util/eventLoader.js')(client);
const ayarlar = require('./config.json');
const Discord = require('discord.js');
 const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
 };
 client.commands = new Discord.Collection();
 fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./commands/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => {
      let props = require(`./commands/${f}/${fs}`);
      log(`${props.help.name} // Yüklendi`);
      client.commands.set(props.help.name, props);
     });
    });
   });
  });
client.elevation = message => {
	if (!message.guild) {
		return;
	}
	let permlvl = 0;
	if (message.member.hasPermission('BAN_MEMBERS')) permlvl = 2;
	if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
	if (message.author.id === ayarlar.sahip) permlvl = 4;
	return permlvl;
};
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	client.user.setActivity('Nether test bot | .help', { type: 'WATCHING' });
});
client.login(token)
