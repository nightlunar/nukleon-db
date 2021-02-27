const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('Gelip-Giden Yardım Menüsü')
.addField(`**<:DE_AuditRoleAdd:815141714355290122> Otorol**`, `sunucunuzda otorol ayarlamak için \`.otorol @rol\` kullanabilirsiniz`)
.addField(`**<a:AU_Rainbowghost:815142407964196874> Embed Renkler**`, `Çıkış embed rengini değiştirmek için;  \`.çıkış-renk #renkkodu\`\ngiriş embed rengini değiştirmek için \`.giriş-renk #renkkodu\` `)
.addField(`**<:DE_IconFriends:815143741199351839> Giriş/Çıkış Kanalları **`, `Çıkış kanalını ayarlamak için \`.çıkış-kanal #kanal\`\nGiriş kanalını ayarlamak için \`.giriş-kanal #kanal\``)
.addField(`**<:kopke_members:815145017319882782> Giriş/Çıkış Mesajları**`, `Giriş mesajını ayarlamak için \`.giriş-mesaj <mesaj>\`\nÇıkış mesajını ayarlamak için \`.çıkış-mesaj <mesaj>\` `)
.addField(`**<:confusedProblem:815147318851928084> Ayarları Sıfırla **`, `Giriş/Çıkış ayarlarını sıfırlamak istiyorsan \`.gelip-giden sıfırla\` `)


message.channel.send(embed)
};
exports.conf = {
  aliases: ['welcomer', 'giriş-çıkış'],
  permLevel: 0
};
exports.help = {
  name: "gelen-giden"
}