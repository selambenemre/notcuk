const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Eymen Bots")
.setThumbnail("https://cdn.discordapp.com/emojis/727895499482595368.gif?v=1")
    .setDescription(`

╔════════════════════════════════════╗
║**»** **ey!ping** : Botun Pingini Gösterir.
║**»** **ey!istatistik** : Botun İstatistiklerini Gösterir.
║**»** **ey!kullanıcı-bilgi** : Bir Kullanıcının Kullanıcı Bilgilerini Gösterir.
║**»** **ey!oylama** : Oylama yapmanızı sağlar. 
║**»** **ey!avatar** : Etiketlediğiniz Kişinin Avatarını Gösterir.
║**»** **ey!osmanlı-bilgi** : Osmanlı İmparatorluğu'nun Tarihini genelleme ║olarak gösterir.                                                                                                           
║**»** \`\`\ey!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**                                                                        
╚════════════════════════════════════╝
`) 
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["kullanıcı-menüsü"], 
    permLevel: 0 
  };
                                       
  exports.help = {
    name: 'kullanıcı', 
    description: '',
    usage: 'help'
  };     