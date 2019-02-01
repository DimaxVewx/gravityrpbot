const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "+"

client.on("ready", function() {
    client.user.setGame("Gravity RP / +help");
    console.log("Le bot est bien demarré ");
})

client.login('NTQwOTczMjg0NDU2NTI5OTQx.DzYwBQ.3woibtmtrujJpCVoPUyE04Veeio');

client.on('message', message => {
    if(message.content === "/vote"){
        message.channel.sendMessage('https://gta.top-serveurs.net/gravity-rp');
        console.log('Le bot est bien démarré !')
    }

});

client.on('guildMemberAdd', member => {

let embed = new Discord.RichEmbed()
    .setDescription(':tada: **' + member.user.username + '** a **rejoint** le serveur discord ' + member.guild.name)
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('540983226232078374').send(embed)
  member.addRole('540990349632602146')

});

client.on('guildMemberRemove', member => {

    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a **quitté** le serveur discord ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
      member.guild.channels.get('540983226232078374').send(embed)
    
    });

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});

/*Ban*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});
