const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.cache.find(r => r.id === "ERKEK ID"); //buraya erkek rolünüzün id'sini koyun
  const misafir = message.guild.roles.cache.find(r => r.id === "KAYITSIZ ID"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.cache.find(c => c.id === "LOG ID"); //buraya kayıt log id koyun
  const tag = "TAG";
  if(!message.member.roles.cache.array().filter(r => r.id === "KAYIT YETKILISI ID")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
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
    c.setNickname(`${tag} ${nick} , ${yas}`)
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
**Bir Erkek Üye Kayıt Oldu! Aşağıda Bilgiler Yazmakta.**

• Kaydı Yapılan Üye: **${c.user.tag}**
• Kaydı Yapan Yetkili: **${message.author.tag}**
• Değiştirilen İsim: ${tag} ${nick} | ${yas}

**Rol Bilgileri Aşağıda Yazmakta.**

• Verilen Rol: ${kayıtlı}
• Alınan Rol: ${misafir}

`)
    .setFooter('Excallant Kayıt Sistemi | Developer By Marcellus')
   
    log.send(pink)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e","bay"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   