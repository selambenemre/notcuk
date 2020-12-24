const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
  .setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("         Eymen Bots")
.setThumbnail("https://cdn.discordapp.com/emojis/727894381708836917.gif?v=1")
    .setDescription(`

╔════════════════════════════════════╗
║ > **» ey!yaz :** Bota yazı yazdırırsınız.
║ > **» ey!taksimdayı :** Taksim dayı gifi atar.
║ > **» ey!ara155 :** Polisi aramanıza yarar.
║ > **» ey!espri :** Bot sizin için espri yapar.
║ > **» ey!kaç-cm :** Bot malafat uzunluğunuzu söyler.
║ > **» ey!kralol :** Kral olmanıza yarar.
║ > **» ey!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
║ > **» ey!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
║ > **» ey!fbi :** Fbi yi çağırırsınız.
║ > **» ey!ağla :** Botu ağlatırsınız.
║ > **» ey!banner :** Bot girdiğiniz yazı ile bir sıradan banner atar.                                                                      
║ > **» ey!fakenitro :** Fake Nitro atar.
║ > **» ey!korkut :** Bir üyeyi korkutursunuz.
║ > **» ey!token :** Botun tokenini atar.
║ **» ey!şutçek :** Şut çekersiniz.
║ **» ey!çıkma-teklifi-et :** Çıkma teklifi eder.
║**»** \`\`\e!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**                                                                        
╚════════════════════════════════════╝
`) 
  
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["eğlence-menüsü"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'eğlence', 
    description: '',
    usage: 'help'
  };


