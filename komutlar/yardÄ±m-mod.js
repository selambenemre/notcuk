const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("EYMEN BOTS")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔════════════════════════════════════╗
║**»** **ey!ban** : Sunucudan bir üyeyi yasaklar.
║**»** **ey!sil** : Belirli bir kanaldaki mesajları siler.
║**»** **ey!kick** : Sunucudan bir üye kickler.
║**»** **ey!kilitle** : Kanalı istediğiniz kadar süreyle kitler.
║> **» ey!istatistik :** Botun istatiklerini gösterir.
║> **» ey!koruma-sistemi :** Sunucunuz için saldırılardan korunma sistemini açarsınız.
║> **» ey!kick :** Belirttiğiniz üyeye bot kick atar.
║> **» ey!nuke :** Yazdığınız kanala nuke atar.
║> **» ey!ping :** Botun Pingini ölçersiniz.
║> **» ey!tag :** Kullandığınız tagı atar.
║**» ey!oylama :** Oylama yaparsınız.
║**» ey!otorol :** Otorol ayarlarsınız.
║**» ey!slowmode :** Yavaşmod açarsınız.
║**»** \`\`\ey!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**
╚════════════════════════════════════╝
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'moderasyon', 
    description: '',
    usage: ''
  };