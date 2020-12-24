const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.cache.find(r => r.id === "KIZ ID"); //kız id 
  const misafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ ID"); //kayıtsız id
  const log = message.guild.channels.cache.find(c => c.id === "LOG ID"); //log id
  const tag = "TAG"; //tagınız
  if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT YETKILISI ID")[0]) { //srumlu id
    return message.channel.send("Botumu Bozucan Knk Yetkin Yok Napıyosun?");
  } else {
    let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Kayıt Edebilmem İçin Bir ``İsim`` Girmelisin.**")
      if(!yas) return message.channel.send("**Kayıt Edebilmem İçin Bir ``Yaş`` Girmelisin.**")
    c.roles.add(kayıtlı)
    c.roles.remove(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
        const pinkcode = new Discord.MessageEmbed()
    .setDescription(`
:white_check_mark: Kayıt Başarılı :white_check_mark:

• Kaydı Yapılan Üye: **${c.user.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}
• Verilen Rol: ${kayıtlı}
`)
         .setFooter('Excallant Kayıt Sistemi | Developer By Marcellus')
     message.channel.send(pinkcode)
    
    
    //loga mesaj
    const pink = new Discord.MessageEmbed()
    .setDescription(`
**Bir Kadın Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

• Kaydı Yapılan Üye: **${c.user.tag}**
• Kaydı Yapan Yetkili: **${message.author.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}

**Rol Bilgileri Aşağıda Yazmakta.**

• Verilen Rol: ${kayıtlı}
• Alınan Rol: ${misafir}

`)
    .setFooter('Excallant Kayıt Sistemi | Developer By Marcellus')
   .setColor('PİNK')
    log.send(pink)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","bayan","kadın"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
   