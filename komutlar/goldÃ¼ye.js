const Discord = require('discord.js')
const db = require("quick.db")
const ms = require("ms")
exports.run = async (client, message, args) => {
let a = message.mentions.users.first() || args[0]
if(!a) return message.reply("Lütfen birini etiketle veya bir id gir.")
if(message.mentions.users.first()) {
let b = args[1]
if(!b) return message.reply("Lütfen bir zaman aralığı gir.")
db.set(`gold.${a.id}.goldsüre`, message.createdTimestamp+(ms(b.replace("sn", "s").replace("dk", "m").replace("sa", "h").replace("g", "d"))))
message.reply("İşlem başarılı!")
return;
} else {
let b2 = args[1]
if(!b2) return message.reply("Lütfen bir zaman aralığı gir.")
db.set(`gold.${a}.goldsüre`, message.createdTimestamp+(ms(b2.replace("sn", "s").replace("dk", "m").replace("sa", "h").replace("g", "d"))))
message.reply("İşlem başarılı!")
return;
}
}
//ceyhun
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4 // botsahibi permine ayarlıyoruz*
};

exports.help = {
    name: 'gold-yap',
    description: 'gold-yap',
    usage: 'gold-yap'
}