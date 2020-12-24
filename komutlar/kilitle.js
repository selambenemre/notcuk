const Discord = require("discord.js");
const ms = require("ms");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        ":warning: Uyarı :warning:",
        "ALONE MODERASYON | `kilit` adlı komutu özel mesajlarda kullanamazsın."
      );
    return message.author.send(motion);
  }
  if (!client.lockit) client.lockit = [];
  let time = args.join(" ");
  let validUnlocks = ["kilitaç", "unlock"];
  if (!time)
    return message.channel.send(
      "ALONE MODERASYON・**Doğru Kullanım** : `a!kilitle 2min`"
    );
  if (validUnlocks.includes(time)) {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send(
          "ALONE MODERASYON・**Kanal Kilidi Açıldı.**"
        );
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(motion => {
        console.log(motion);
      });
  } else {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel
          .send(`**Kanal Kilitlendi.** ${ms(ms(time), { long: true })}`)
          .then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
              message.channel
                .overwritePermissions(message.guild.id, {
                  SEND_MESSAGES: null
                })
                .then(
                  message.channel.send(
                    "ALONE MODERASYON・**Kanalın Kilidi Açıldı.**"
                  )
                )
                .catch(console.motion);
              delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(motion => {
        console.log(motion);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalıkilitle'],
  permLevel: 3
};
exports.help = {
  name: 'kilitle',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kanalıkilitle'
};