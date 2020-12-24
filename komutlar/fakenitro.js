const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`<a:nitro_boost:787728426605871104> https://discord.gift/EhhGDYVZ6uHar6quCMa9EtSy <a:nitro_boost:787728426605871104>`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://discord.gift/EhhGDYVZ6uHar6quCMa9EtSy", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'fakenitro',
    description: 'fakenitro',
    usage: 'fakenitro'
  };