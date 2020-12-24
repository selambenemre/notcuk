const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setColor("#140589")
.setTitle("EYMEN BOTS")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


**»** **ey!reklam-engel aç/kapat** : Sunucuda Reklam Yapanları Engeller.
**»** **ey!küfür-engel aç/kapat** : Sunucuda Küfür Söyleyenleri Engeller.

**»** \`\`\ey!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**

`) 
      
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["koruma-menüsü"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'koruma-sistemi', 
    description: 'MEE6 HELP MENU',
    usage: 'help'
  };
// Kod Muhammedindir 