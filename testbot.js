const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
  console.log(`Logged in as ${client.user.tag}! `);
});

client.on('message', msg => {
  if (msg.author.username === 'kickbot') return
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }



});
client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Välkommen till servern, ${member}`);
  if (member.user.username === 'kickbot') return
  member.sendMessage("Hello and welcome to the server, hope you enjoy!");
});
client.on('message', join => {
  if (!join.guild) return;

  if (join.content === '/join') {

  if (join.member.voiceChannel) {
    join.member.voiceChannel.join()
    .then(connection => {
      join.reply("I have successfully joined a channel.");
      const dispatcher = connection.playFile('C:/Users/daban.jamshir/Downloads/earrape.mp3');
      dispatcher.on('end', () => {
      join.member.voiceChannel.leave()
      })
    })
  } else {
    join.reply("You need to join a voicechannel first.");
  }
}
});


client.login('NDIxMjgzMTk4MjI0NDMzMTgy.DbtGyw.-Y_5hg3JlHMhf91CiYHjhEjGi_0');
