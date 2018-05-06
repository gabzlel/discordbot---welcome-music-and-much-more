const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready' , () => {
  console.log(`Logged in as ${client.user.tag}! `);
});

client.on('message', msg => {
  console.log(msg)
  const channel = msg.guild.channels.find('name', 'general');
  let modRole = msg.guild.roles.find("name", "Owner");
  if (!msg.member.roles.has(modRole.id))
  if (msg.author.username === 'kickbot') return
  if (msg.content === `${prefix}help`) {
    msg.reply("I have sent you the commands in DMs.")
    msg.author.send("testing this");
  }
  if (msg.author.username === 'kickbot') return
  //if (msg.content.includes('http')) {
  if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(msg.content)) {
    msg.delete()
    msg.reply("No links in general, please refer to #url channel")
  }
  if (msg.attachments.array().length > 0) {
    msg.delete()
    msg.reply("No images here, please post in #images channel")
  }
  else {

    if (msg.channel.id === '442789555884785674')
  }
});
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Välkommen till servern, ${member}`);
  if (member.user.username === 'kickbot') return
  member.sendMessage("Hello and welcome to the server, hope you enjoy!");
});
client.on('message', msg => {
  if (!msg.guild) return;
  if (msg.content === `${prefix}join`) {
    let modRole = msg.member.hasPermission("MANAGE_MESSAGES");
    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    return msg.reply("Get permission first tard.");
  if (msg.member.voiceChannel) {
    msg.member.voiceChannel.join().then(connection => {
      msg.reply("I have successfully joined a channel.");
      msg.delete()
      let musicFolder = 'C:/Users/Gabz/Downloads/';
      let fileName = '[No Copyright Music] Rock Angel - Joakim Karud.mp3';
      const dispatcher = connection.playFile(musicFolder + fileName);
      msg.reply('Playing ' + fileName);
      dispatcher.on('end', () => {
      msg.member.voiceChannel.leave()
      })
    })
  } else {
    msg.reply("You need to join a voicechannel first.");
  }
}
});


client.login('NDIxMjgzMTk4MjI0NDMzMTgy.DbtGyw.-Y_5hg3JlHMhf91CiYHjhEjGi_0');
