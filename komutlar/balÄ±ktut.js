const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var espriler = ['Sazan Tuttun! :fish:' ,'Köpek Balığı Tuttun İyi Para Eder Sat Sat :D https://tenor.com/view/%D0%B4%D0%BD%D0%B5%D1%81%D1%82%D1%80-%D1%80%D1%8B%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0-fishing-fishing-line-fishing-cast-gif-16161668' ,'Uskumru Tuttun! :fish:' ,'Mezgit Tuttun! Havyarıda Var hee ;) :fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! :fish:' ,'Levrek Tuttun! :fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Alabalık Tuttun! :fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'İstavrit Tuttun! '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: ''
};