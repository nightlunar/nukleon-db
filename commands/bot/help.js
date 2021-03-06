const Discord = require('discord.js');
const qdb = require('quick.db');
const ayarlar = require('../../config.json');
exports.run = async(client, message, args) => {
  var a = qdb.fetch(`prefix_${message.guild.id}`) //PLASMİC - DİSCORD.GG/JAVASCRIPT
  if(a){ 
    var p = a
  }
  if(!a){
    var p = ayarlar.prefix
  }
  const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  .setAuthor(`${client.user.username} Komutları`, client.user.displayAvatarURL({dynamic: true})
  )
  .setTitle(`Bu sunucudaki prefix'im : \`${p}\``)
  .addField(`**<:DE_IconFriends:815619953662099466> ${p}welcomer**`, "Giriş çıkış komutlarını gösterir.", true)
  .addField(`**${p}kayıt-yardım**`, "Kayıt komutlarını gösterir.", true)
  .addField(`**${p}emoji-yardım**`, "Emoji komutlarını gösterir.", true)
  .addField(`**${p}yedek-yardım**`, "Sunucu yedekleme komutlarını gösterir", true)
  .setFooter(`${message.author.username} istedi!`, message.author.displayAvatarURL({dynamic: true}))
  return message.channel.send(embed)
};
exports.conf = {
  aliases: ["h", "yardım", "y"],
  permLevel: 0
}
exports.help = {
  name: "help"
}