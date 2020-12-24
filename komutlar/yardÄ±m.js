const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**                       Eymen Bots**  \n\n> :floppy_disk: `ey!istatistik` **Botun istatistik bilgilerini açar.** \n>  **Şuanda kullanılan prefix** `ey!`")
.setThumbnail("https://cdn.discordapp.com/attachments/784518732503842886/788478167643455518/standard.gif")
.setDescription(`

▬▬▬▬▬▬[ <a:beyaztik:787368274488459306>  **Eymen Bots** <a:beyaztik:787368274488459306>  ]▬▬▬▬▬▬

> **» ey!mod :** Moderasyon Yardım komutu. 
> **» ey!eğlence :** Eğlence Yardım komutu. 
> **» ey!kullanıcı :** Kullanıcı Yardım komutu. 
**▬▬▬▬▬▬▬[** <a:beyaztik:787368274488459306>  **Bilgilendirme** <a:beyaztik:787368274488459306>  **]▬▬▬▬▬▬▬**

> <a:beyaztik:787368274488459306>  **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> <a:beyaztik:787368274488459306>  **Botun Davet Linkine Gitmek İçin [Tıkla!](https://discord.com/api/oauth2/authorize?client_id=787980163769171998&permissions=8&scope=bot)**
> <a:beyaztik:787368274488459306>  **Komut hakkında detaylı bilgi için: ey!yardım**
> <a:beyaztik:787368274488459306>  **Aktif discord.js sürümüm: v12.2.0**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};