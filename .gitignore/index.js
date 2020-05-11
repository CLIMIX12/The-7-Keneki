const Discord = require('discord.js')
const client = new Discord.Client()
const bot = new Discord.Client()
const config = require("./config.json");
const arraySort = require("array-sort")
const table = require("table")
const superagent = require("superagent")
const fs = require('fs')
const ytdl = require("ytdl-core");

var servercount = client.guilds.count;

let prefix = config.prefix

client.on('message', message => {
    if (message.content === prefix + 'ping') {

      message.channel.send('Pong ! ' + Math.ceil(Date.now() - message.createdTimestamp) + "ms")

    }
})

client.on('message', message => {
    if (message.content === prefix + 'userinfo') {
        const useriEmbed = new Discord.MessageEmbed()
        .setColor("00FFDC")
        .setTitle(`Info de l'utilisateur ${message.author.username}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(`Informations de ***${message.author.username}***`, message.author.displayAvatarURL())
        .addField("**Username**", `${message.author.username}`, true)
        .addField("**Tag**", `${message.author.discriminator}`, true)
        .addField("**ID**", `${message.author.id}`)
        .addField("**Status**", `${message.author.presence.status}`, true)
        .addField("**Créé le**", dformat)
        .addField("**Votre ping**\n" + `${Math.ceil(Date.now() - message.createdTimestamp)}ms`)
        .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 `, message.guild.iconURL())
        .setTimestamp()
        message.channel.send(useriEmbed)
    }
})


var d = new Date,
    dformat = [d.getDay(),
               d.getMonth()+1,
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':')

client.on('message', message => {
    if (message.content === prefix + 'avatar') {
        const zEmbed = new Discord.MessageEmbed()
        .setColor("55e546")
        .setImage(message.author.displayAvatarURL())
        .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 `, message.guild.iconURL())
        message.channel.send(zEmbed)
    }
})

client.on('message', message => {
    if (message.content === prefix + 'help') {
      if (message.channel.type === "dm") {
        return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
      }
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle("Hey, " + message.member.user.username + " voici la liste des commandes !\n\n")
            .setDescription("Administration (9)\n"
            +"`clear`, `mute`, `warn`, `kick`, `ban`\n,`unwarn`, `unmute`, `infractions`, `config`\n\n"
            +"Fun (8)\n"
            +"`8ball`, `love`, `avatar`, `work`\n `boutique`, `économie`, `say`, `calclove`\n\n"
            +"Utilitaires (12)\n"
            +"`poll`, `serverinfo`, `userinfo`, `suggest`\n `serverlist`, `lien-bot`, `suggest`, `info-commande`\n `customembed`, `c-channel`, `c-role`, `annonce`\n"
            )
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 `, message.guild.iconURL())
            .setTimestamp()
            .setColor('#f1e300')
            if (message.author.bot) 
            {     
                exampleEmbed.setColor('#df61e1');
            }
            message.channel.send(exampleEmbed)

    }
})

client.on('message', message => {
  if (message.content === prefix + 'info-commande') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription(`**Pour quelle commande veux-tu avoir des information** ?`)
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 `, message.guild.iconURL())
          .setTimestamp()
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'clear') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `clear` !\n\n Elle sert a supprimer des message !\n Voici sont utilisation : ```;clear <nombre de message à supprimer>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`, message.guild.iconURL())
          .setTimestamp()
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'calclove') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `calclove` !\n\n Elle sert a calculer l'amour avec une personne !\n Voici sont utilisation : ```;calclove <nom de la 1ère personne> <nom de la 2ème personne>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`, message.guild.iconURL())
          .setTimestamp()
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'say') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `say` !\n\n Elle sert a dire votre message !\n Voici sont utilisation : ```;say <le message>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'customembed') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `customembed` !\n\n Elle sert a faire des embeds personnalisés !\n Voici sont utilisation : ```;customembed <la description du message>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'mute') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `mute` !\n\n Elle sert a rendre muet quelqu'un !\n Voici sont utilisation : ```;mute <la personne à mute> + <raison>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'warn') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `warn` !\n\n Elle sert a donner un avertissement à un membre !\n Voici sont utilisation : ```;warn <la personne à warn> + <raison>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'kick') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `kick` !\n\n Elle sert a expulser un membre !\n Voici sont utilisation : ```;kick <la personne à kick> + <raison>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'ban') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `ban` !\n\n Elle sert a bannir un membre !\n Voici sont utilisation : ```;ban <la personne à ban> + <raison>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'unwarn') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `unwarn` !\n\n Elle sert a retirer l'avertissement d'un membre !\n Voici sont utilisation : ```;unwarn <la personne à unwarn>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat, message.guild.iconURL())
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'unmute') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `unmute` !\n\n Elle sert a retirer le mute d'un membre !\n Voici sont utilisation : ```;unmute <la personne à unmute>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'infractions') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `infractions` !\n\n Elle sert a voir le nombre d'infractions d'un membre !\n Voici sont utilisation : ```;infractions <la personne pour voir ses infractions>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'config') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `config` !\n\n Elle sert a faire la configuration du bot !\n Voici sont utilisation : ```;config```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === '8ball') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `8ball` !\n\n Elle sert a s'amuser en posant une question et le bot va y répondre !\n Voici sont utilisation : ```;8ball <la question>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'love') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `love` !\n\n Elle sert a s'amuser en posant deux prénoms de personne et le bot va y répondre avec d'autres réponse !\n Voici sont utilisation : ```;love <1ère personne> <2ème personne>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'avatar') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `avatar` !\n\n Elle sert a voir son avatar !\n Voici sont utilisation : ```;avatar```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'work') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `work` \n\n Mais je suis désoler car cette commande est en maintenance je ne vous en dirais pas plus ;)")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'boutique') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `boutique` \n\n Mais je suis désoler car cette commande est en maintenance je ne vous en dirais pas plus ;)")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'économie') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `économie` \n\n Mais je suis désoler car cette commande est en maintenance je ne vous en dirais pas plus ;)")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'poll') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `poll` \n\n Elle sert à  faire un sondage !\nVoici son utilisation : ```;poll <la phrase du sondage>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'serverinfo') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `serverinfo` \n\n Elle sert à voir les information du serveur !\nVoici son utilisation : ```;serverinfo```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'userinfo') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `serverinfo` \n\n Elle sert à voir ses information !\nVoici son utilisation : ```;userinfo```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'suggest') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `suggest` \n\n Elle sert à voir faire une suggestion pour améliorer le serveur !\nVoici son utilisation : ```;suggest >la phrase de la suggestion>```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'serverinfo') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `serverlist` \n\n Elle sert à voir les serveurs dans les quels je suis ! !\nVoici son utilisation : ```;serverlist```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === 'lien-bot') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const commandeinfoEmbed = new Discord.MessageEmbed()
          .setTitle("Hey :wave: !\n\n")
          .setDescription("**Voici les information de la commande** `lien-bot` \n\n Elle sert à voir le lien d'invitation du bot ! !\nVoici son utilisation : ```;lien-bot```")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(commandeinfoEmbed)

  }
})

client.on('message', message => {
  if (message.content === prefix + 'serverlist') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      const serverlistEmbed = new Discord.MessageEmbed()
          .setTitle("Hey, voici la liste des serveurs dans les quels je suis !\n\n")
          .setDescription(client.guilds.cache.map(r => r.name + ` | **${r.memberCount}** membres !`))
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020.`)
          .setColor('#03ce00')
          if (message.author.bot) 
          {     
            serverlistEmbed.setColor('#7289da');
          }
          message.channel.send(serverlistEmbed)

  }
})

client.on('message', message => {
  if (message.content === prefix + 'lien-bot'){
    const linkEmbed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/707886903323525170/707907298231582720/Logo-The-7-Keneki-Bot.jpg')
    .setTitle(`Lien d'invitation de **Zaralia**`)
    .setDescription("Hey :wave: ! Voici le lien pour m'inviter dans votre serveur : \nhttps://discord.com/oauth2/authorize?client_id=705029237429764167&scope=bot&permissions=805314622")
    .setColor('#1be3ff')
    .setFooter("`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 ")
    .setTimestamp()
    message.channel.send(linkEmbed)
  }
})

client.on("guildMemberAdd", message => {
  const addEmbed = new Discord.MessageEmbed()
    .setTitle(message.user.username + " à rejoint !", message.user.displayAvatarURL())
    .setDescription('Bienvenue sur le serveur ' + message.guild.name + ' **' + message.user.username + '** !\n Nous sommes désormais ' + message.guild.memberCount + " membres !")
    .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/708990413373046845/709370963132940299/telechargement_11.jpg')
  client.channels.cache.get('708453293852196865').send(addEmbed);
})

client.on("guildMemberAdd", member => {
  member.roles.add('708466921720512524');
})

client.on("guildMemberRemove", message => {
  const removeEmbed = new Discord.MessageEmbed()
    .setTitle(message.user.username + " est partit...", message.user.displayAvatarURL())
    .setDescription('Au revoir **' + message.user.username + "**... On espère que tu t'es amusé(e) en notre compagnie !\n Nous sommes désormais " + message.guild.memberCount + " membres !")
    .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/708990413373046845/709370963132940299/telechargement_11.jpg')
  client.channels.cache.get('708453447703199844').send(removeEmbed);
})

let statuses = ["𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 Online", "?help"];

client.on('ready', function (guild) {
    console.log('Bot opérationnel !')
    setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]

      client.user.setPresence({game: { name: status}, status: 'online'});

      client.user.setPresence({activity: { name: status}, status: 'online'})

  }, 10000);
})

let BadWords = ["ptn", "PUTIN", "PUTAIN", "ferme ta gueule","PTN", "PT N", "P T N", "Enfoiré", "ENFOIRE", "Pd", "p.D", "pD", "P.T.N", "SALOPE", "SALOP", "SALO", "salo", "SALAUD", "salaud", "putin", "putain", "p.t.n", "p.u.t.a.i.n", "PD", "pd", "enfoiré", "salope", "p.u.tain", "pute", "put", "tg", "gueule", "zizi", "tagueule", "TG", "ftg", "FTG", "geule", "nicke", "nick", "nik", "fdp", "encule", "encul", "enculé", "enculer", "con", "conne", "penis", "pénis", "ûrêtre", "urêtre", "uretre", "puteee", "enculez", "enculer", "connar", "connard", "connart", "connare", "connasse", "conasse", "connase", "bit", "bite", "kekete", "kekette", "kecette", "cecette", "ntm", "FDP", "F.D.P", "NTM", "N.T.M", "n.t.m", "fils de pute", "fil de put", "fil de pute", "baise t'es morts", "va te faire enculer", "va te faire foutre", "FILS DE PUTE", "FiLs De PuTe", "fIlS dE pUtE", "va niker ta mère", "nike t'es morts", "Espèce de connard", "espèce de connard", "sale noir", "sale blanc", "sale chinoi", "sale asiatique", "sale roumain", "bande de con", "va te faire baiser", "on va te raid fdp", "sale fils de pute", "FIL DE PUTE", "FILLE DE PUTE", "fille de pute", "sale chien", "nike ta mère bien profond", "Ferme ta gueule", "ferme ta geuele", "ferme ta putain de gueule", "nike ta grand mère"];

let insulteActiver = false

let Liens = ["http://", "https://", "https://www", "http://www"]

let liensActiver = false

client.on('message', message => {
  if (message.content === "insulte-off"){
    message.channel.send(':x: | **Le mode anti-insulte est désactivé**')
    insulteActiver = false
  }
})

client.on('message', message => {
    if (message.content === "insulte-on"){
      message.channel.send(':white_check_mark: | **Le mode anti-insulte est activé**')
      insulteActiver = true}
        if (insulteActiver == true) {
          for (var i = 0; i < BadWords.length; i++) {
            if (message.content.split(" ").includes(BadWords[i])) {
                message.channel.bulkDelete(1)
                message.channel.send(message.author.toString() + " **Ce mot n'est pas autoriser ici !** :rage:").then(message => 
                  {setTimeout(function() {
                  message.channel.bulkDelete(1);
              }, 6000)})
            }
        };
      }
})

client.on('message', message => {
  if (message.content === "lien-off"){
    message.channel.send(':x: | **Le mode anti-liens est désactivé**')
    liensActiver = false
  }
})

client.on('message', message => {
    if (message.content === "lien-on"){
      message.channel.send(':white_check_mark: | **Le mode anti-liens est activé**')
      liensActiver = true}
        if (liensActiver == true) {
          for (var i = 0; i < Liens.length; i++) {
            if (message.content.split(" ").includes(Liens[i])) {
                message.channel.bulkDelete(1)
                message.channel.send(message.author.toString() + " **Les liens ne sont pas autoriser ici !** :rage:").then(message => 
                  {setTimeout(function() {
                  message.channel.bulkDelete(1);
              }, 6000)})
            }
        };
      }
})

var old_message = []

client.on('message', message => {
  
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (message.content === prefix + "config"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }

    const configEmbed = new Discord.MessageEmbed()
            .setDescription("Bienvenue **" + message.author.username + "** sur la configuration du bot 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 !")
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setColor('#03ce00')
            message.channel.send(configEmbed)
            {setTimeout(function() {
              message.channel.send(config2Embed)
          }, 7000)}
    //2ème message de la configuration
    const config2Embed = new Discord.MessageEmbed()
      .setDescription("Voulez-vous bloquer les insultes ? (insulte-on/insulte-off)")
      .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
      .setColor('#03ce00')
      {setTimeout(function() {
        message.channel.send(config3Embed)
    }, 16000)}
    //3ème message de la configuration
    const config3Embed = new Discord.MessageEmbed()
      .setDescription("Voulez-vous bloquer les liens ? (lien-on/lien-off)")
      .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
      .setColor('#03ce00')
  }
})

client.on('message', function (message) {

    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "poll"){
      if (message.channel.type === "dm") {
        return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
      }
        if (!args[0]) return message.channel.send(":x: | **Invalide**")
        let sondage = args.slice(1).join("**" + " " + "**")
            const pollEmbed = new Discord.MessageEmbed()
              .setTitle("Poll :bar_chart:")
              .setThumbnail(message.author.mentions)
              .setDescription(sondage + "\n\n Répondez avec :white_check_mark: ou :x:")
              .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
              .setTimestamp()
              .setColor("#846c1b")
            message.channel.send(pollEmbed).then(function (message) {
              message.react("✅");
              message.react("❌");
            }).catch(function() {
            })
          }else{
            return console.log
          }        
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "p-poll"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Invalide**")
      let sondage = args.slice(1).join("**" + " " + "**")
          const pollEmbed = new Discord.MessageEmbed()
            .setTitle("Poll :bar_chart:")
            .setThumbnail(message.author.mentions)
            .setDescription(sondage)
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setTimestamp()
            .setColor("#846c1b")
          message.channel.send(pollEmbed).then(function (message) {
            message.react("");
            message.react("");
          }).catch(function() {
          })
        }else{
          return console.log
        }        
})

client.on('message', function (message) {
  
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)
  
  if (args[0].toLowerCase() === prefix + 'customembed') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }

    let embedDesc = args.slice(1).join(" ")
      if(args === 0) return message.channel.send(":x: | **Merci de précisez la description** !")

        const createEmbed = new Discord.MessageEmbed()
          .setTitle("Embed :grin:")
          .setDescription(embedDesc)
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | Créé `)
          .setTimestamp()
          .setColor("RANDOM")
        message.channel.send(createEmbed)
}})

client.on('message', function (message) {
  
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)
  
  if (args[0].toLowerCase() === prefix + 'say') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }

    let sayMsg = args.slice(1).join(" ")
      if(!args[0]) return message.channel.send(":x: | **Merci de précisez le message** !")

        message.channel.bulkDelete(1)

        message.channel.send(sayMsg)
}})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "work"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Invalide**")
          const pollEmbed = new Discord.MessageEmbed()
            .setTitle("Maintenance :shield:")
            .setDescription("Bonjour, cette commande est actuellement en maintenance. Merci de réessayer plus tard.\nNous sommes désolé de la gène occasionné")
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setColor("#846c1b")
          message.channel.send(pollEmbed)
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "boutique"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Invalide**")
          const pollEmbed = new Discord.MessageEmbed()
            .setTitle("Maintenance :shield:")
            .setDescription("Bonjour, cette commande est actuellement en maintenance. Merci de réessayer plus tard.\nNous sommes désolé de la gène occasionné")
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setColor("#846c1b")
          message.channel.send(pollEmbed) 
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "économie"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Invalide**")
          const pollEmbed = new Discord.MessageEmbed()
            .setTitle("Maintenance :shield:")
            .setDescription("Bonjour, cette commande est actuellement en maintenance. Merci de réessayer plus tard.\nNous sommes désolé de la gène occasionné")
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setColor("#846c1b")
          message.channel.send(pollEmbed) 
  }
})

client.on('message', message => {
  
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "c-channel"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | **Tu n'as pas la permssion d'utiliser cette commande** !")
    if (!args[0]) return message.channel.send(":x: | **Veuillez mettre un titre**")
    
    message.guild.channels.create(args[1])

    const cchannelEmbed = new Discord.MessageEmbed()
      .setTitle("Nouveau salon !")
      .setDescription("Le nouveau salon " + args[1] + " vient d'être créé avec succès !")
      .setFooter("Par " + message.author.username, message.author.displayAvatarURL())
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(cchannelEmbed)
  }
})

client.on('message', message => {
  
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "c-role"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | **Tu n'as pas la permssion d'utiliser cette commande** !")
    if (!args[0]) return message.channel.send(":x: | **Veuillez mettre un titre**")
    
    message.guild.roles.create(name = `${args[1]}`)

    const cchannelEmbed = new Discord.MessageEmbed()
      .setTitle("Nouveau rôle !")
      .setDescription("Le nouveau rôle " + args[1] + " vient d'être créé avec succès !")
      .setFooter("Par " + message.author.username, message.author.displayAvatarURL())
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(cchannelEmbed)
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "clear") {
    if (message.channel.type === "dm") {
    return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: | **Vous n'avez pas la permission d'utiliser cette commande** !")
    let count = parseInt(args[1])
    if (!count) return message.channel.send(":x: | **Veuillez indiquer un nombre de messages à supprimer** !")
    if (isNaN(count)) return message.channel.send(":x: | **Veuillez indiquer un nombre valide** !")
    if (count < 1) return message.channel.send(":x: | **Veuillez mettre un nombre plus grand** !")
    if (count > 100) return message.channel.send(":x: | **Veuillez mettre un nombre plus petit** !")
    message.channel.bulkDelete(count  + 1, true )
    const clearEmbed = new Discord.MessageEmbed()
      .setDescription("Je viens de supprimer **" + args[1] + " messages** :white_check_mark:!")
      .setColor('#03ce00')
      if (message.author.bot) 
      {     
          exampleEmbed.setColor('#7289da');
      }
      message.channel.send(clearEmbed)
      {setTimeout(function() {
        message.channel.bulkDelete(1);
      }, 4000)};
}})

/*Kick*/
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
    let kickedUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!kickedUser) return message.channel.send(":x: | **L'utilisateur n'existe pas** !");
    let kickedReason = args.join(" ").slice(22);
  
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(":x: | **Vous n'avez pas les permissions** !");
  
    if (bannedUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(":x: | **Vous ne pouvez pas kick cette personne** !");
  
    let kickEmbed = new Discord.RichEmbed()
      .setDescription(":white_check_mark: | **Kicks**")
      .setColor("#dc143c")
      .addField("Utilisateur kické", `${kickedUser} (ID: ${kickedUser.id})`)
      .addField(
        "Utilisateur ayant kické",
        `${message.author} (ID: ${message.author.id})`
      )
      .addField("Salon", message.channel)
      .addField("Raison", kickedReason);
  
    message.guild.member(kickedUser).kick(kickedReason);
    message.channel.send(kickEmbed);
  }
})

/*Ban*/
client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === prefix + 'ban') {
    let bannedUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!bannedUser) return message.channel.send(":x: | **L'utilisateur n'existe pas** !");
    let bannedReason = args.join(" ").slice(22);
  
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(":x: | **Vous n'avez pas les permissions** !");
  
    if (bannedUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(":x: | **Vous ne pouvez pas bannir cette personne** !");
  
    const banEmbed = new Discord.MessageEmbed()
      .setDescription(":white_check_mark: | **Bans**")
      .setColor("#dc143c")
      .addField("Utilisateur banni", `${bannedUser} (ID: ${bannedUser.id})`)
      .addField(
        "**Utilisateur ayant banni**",
        `${message.author} (ID: ${message.author.id})`
      )
      .addField("Salon", message.channel)
      .addField("Raison", bannedReason);
  
    message.guild.member(bannedUser).ban(bannedReason);
    message.channel.send(banEmbed);
  };
})

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + '8ball') {
      if (message.channel.type === "dm") {
        return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
      }
        if (!args[0]) return message.channel.send(":x: | **Veuillez poser une question**")
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"]
        let question = args.slice(1).join(" ")
            const ballEmbed = new Discord.MessageEmbed()
              .setTitle("8ball")
              .setThumbnail(message.author.mentions)
              .addField("Question :", question)
              .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
              .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`);
            message.channel.send(ballEmbed)
    }
  })

  client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
  
      if (args[0].toLowerCase() === prefix + 'calclove') {
        if (message.channel.type === "dm") {
          return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
        }
          if (!args[0]) return message.channel.send(":x: | **Veuillez mettre les deux personnes**")
          let answers = ["1%\nIl faut mieux abandonner... Vous n'êtes pas fait pour être ensemble :broken_heart:", "5%\nC'est très très peu... Il faut essayer mais votre chance est très faible :broken_heart:", "", "15%\nIl faut pas abandonner ! Votre chance est faible mais rien ne coûte d'essayer !", "25%\nC'est bien ! Votre chance est moyenne alors une relation est possible !", "35%\nIl faut continuer ! Votre chance et bonne vous pouvez continuer à lui parler !", "45%\n Continue ! Tu es dans la moyenne ! Une relation est possible ne baisse pas les bras !", "55%\n Tu as une bonne relation avec cette personne, continue !", "65%\nVous formez une super équipe ! Vous vous aimez fort ! :heart_exclamation:", "75%\nVous vous aimez beaucoup ! Votre chance est bonne ! :revolving_hearts:", "85%\nIl faut que vous vou rencontrez ! Votre chance et très bonne ! :revolving_hearts:", "93%\nVous vous aimez très fort ! Une très bonne relation est possible ! :cupid:", "100%\nVous vous aimez plus que tout ! Une très très bonne relation est possible ! :cupid:"]
          let question = args.slice(1).join(" ")
              const ballEmbed = new Discord.MessageEmbed()
                .setTitle("Calc Love :heart:")
                .setThumbnail(message.author.mentions)
                .addField("Question :", question)
                .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
                .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`);
              message.channel.send(ballEmbed)
      }
    })

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "suggest"){
      if (message.channel.type === "dm") {
        return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
      }
        if (!args[0]) return message.channel.send(":x: | **Invalide**")
        let suggest = args.slice(1).join(" ")
            const suggestEmbed = new Discord.MessageEmbed()
              .setTitle("Suggestion de " + message.author.username)
              .setDescription(suggest + "\n\n Répondez avec :white_check_mark: ou :flag_white: ou :x:")
              .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
              .setColor("RANDOM")
            message.channel.send(suggestEmbed).then(function (message) {
              message.react("✅");
              message.react("🏳")
              message.react("❌");
            }).catch(function() {
            })
          }else{
            return console.log
      }
})

module.exports.run = async (client, message, args) => {
  client.on('message', function (message) {

    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (message.content === prefix + "mute") {

      let user = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
      );
      let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
      let muteTime = (args[1] || '60s');

      if (!muteRole) {
        muteRole = message.guild.roles.create({
          data: {
            name: 'muted',
            color: '#000',
            permissions: []
          }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            channel.updateOverwrite(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            CONNECT: false
          });
        });
      };

      user.roles.add(muteRole.id);
      message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

      setTimeout(() => {
        user.roles.remove(muteRole.id);
      }, ms(muteTime));

      const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
        .setColor("#287db5")
        .setDescription("**Action**: `Mute`" `\n**Temps**: ${ms(ms(muteTime))}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
        
      client.channels.cache.get('708999764317962281').send(embed);
    }
  })
}

client.on('message', message => {
    if(message.content === prefix + 'serverinfo') {
      if (message.channel.type === "dm") {
        return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
      }
        console.log()
        const aEmbed = new Discord.MessageEmbed()
        .setColor("00FFDC")
        .setTitle("Information du serveur " + message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`Information de ${message.guild.name}`, message.guild.iconURL())
        .addField("**Nom du serveur**", `${message.guild.name}`, true)
        .addField("**Propriétaire du serveur**", `${message.guild.owner}`, true)
        .addField("**Nombre de membres**", `${message.guild.memberCount}`)
        .addField("**Créé le**", `${message.guild.createdAt}`)
        .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`);
        message.channel.send(aEmbed)
    }
})

client.on('message', message => {
  if(message.content === prefix + 'unban') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }

    let user = client.users.fetch(args[0]);
    if (!user) return message.reply(":x: | **L'utilisateur n'existe pas** !");
    message.guild.members.unban(user);
  
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
      .setColor("#35f092")
      .setDescription("**Action**: `unban`")
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());
      
    client.channels.cache.get('708999764317962281').send(embed);
  }
})

client.on('message', message => {
  if(message.content === prefix + 'unmute') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
  
    if (!user.roles.cache.has(muteRole.id)) return message.reply(":x: | **L'utilisateur mentionné n'est pas muté** !");
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus muté !`);
  
    const embed = new MessageEmbed()
      .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
      .setColor("#35f092")
      .setDescription("**Action**: `unmute`")
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());
      
    client.channels.cache.get('708999764317962281').send(embed);
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "love"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Veuillez poser une question**")
      let answers = ["Pas du tout :x:", "Pas :grimacing:", "Un peu... :relaxed:", "Beaucoup :smiling_face_with_3_hearts:", "Enormément :cupid:", "A la folie :heart_eyes:"]
      let love = args.slice(1).join(" " + " **&** " + " ")
          const loveEmbed = new Discord.MessageEmbed()
            .setTitle("Love :heart:")
            .setThumbnail(message.author.mentions)
            .setDescription(love + "\n\n S'aiment... " + answers[Math.floor(Math.random() * answers.length)])
            .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020`)
            .setColor("RANDOM")
          message.channel.send(loveEmbed)

  }
})

client.on('message', message => {
  if (message.content === "CC") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "CouCou") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Coucou") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "cc") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "coucou") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Salut") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "salut") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Slt") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "SALUT") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HEY") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Hey") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "hey") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HeY") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HI") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Hi") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "re") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "RE") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Re") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "hi") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Holla") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "holla") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HOLLA") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Hola") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "hola") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HOLA") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Hello") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "hello") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HELLO") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "HALLO") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Hallo") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "hallo") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "slt") {
    message.react("👋")
  }
})



client.on('message', message => {
  if (message.content === "SLT") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Bonjour") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "bonjour") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "BONJOUR") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "bjr") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "BJR") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "Bjr") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === "BONJOUR") {
    message.react("👋")
  }
})

client.on('message', message => {
  if (message.content === ";help") {
    message.react("✅")
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "shifoumi"){
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
      if (!args[0]) return message.channel.send(":x: | **Invalide**")
          const pollEmbed = new Discord.MessageEmbed()
            .setTitle("Shifoumi :thumbsup:")
            .setDescription("C'est partit pour la partie de shifoumi !\n\n :punch:, :raised_hand:, :v:")
            .setFooter(`© Zaralia 2020`)
            .setColor("#846c1b")
          message.channel.send(pollEmbed)
      {setTimeout(function() {
        message.channel.send('3...')
      }, 1000)};
      {setTimeout(function() {
        message.channel.send('2...')
      }, 2000)};
      {setTimeout(function() {
        message.channel.send('1...')
      }, 3000)};
      {setTimeout(function() {
        message.channel.send(':white_check_mark: | **GO**')
      }, 4000)}
  };
})

client.on('message', function (message) {
  if (message.content === '?manga my hero acadamia') {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**");
    }
    const manga1Embed = new Discord.MessageEmbed()
          .setTitle("My Hero Acadamia :book:")
          .setDescription("**Information :**\n\n***My Hero Academia*** (僕のヒーローアカデミア, Boku no Hīrō Akademia?) est un manga shōnen écrit et dessiné par Kōhei Horikoshi. Il est pré-publié depuis juillet 2014 dans le magazine Weekly Shōnen Jump de l'éditeur Shūeisha, "
          +"et vingt-six tomes sont sortis en mars 2020."
          +"La version française est publiée par Ki-oon depuis avril 2016 et compte vingt-troistomes à ce jour."
          +"Une adaptation en anime par le studio Bones est diffusée entre avril et juin 2016 sur MBS au Japon et en simultané sur le site ADN dans les pays francophones et la chaîne J-One."
          +"Une deuxième saison est diffusée entre avril et septembre 2017, suivie par une troisième saison diffusée entre avril et septembre 2018. Une quatrième saison est diffusée entre octobre 2019 et avril 2020."
          +" La série est diffusée en version française sur Toonami depuis le 12 février 2018. Deux films d'animation sont également sorti en août 2018 et décembre 2019, respectivement.\n\n (Source Wikipédia)"
          +"\n\n **Date de sortie :**\n 7 juillet 2014 jusqu'à ?" 
          + "\n\n**Type :**\n Manga"
          +"\n\n **Volumes :**\n 26")
          .setFooter(`© 𝔗𝔥𝔢 𝟽 𝔎𝔢𝔫𝔢𝑘𝔦 2020 | ` + dformat)
          .setColor("RANDOM")
    message.channel.send(manga1Embed)
  }
})

client.on('message', function (message) {
  if (message.content === "?manga naruto") {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**")
    }
    const manga2Embed = new Discord.MessageEmbed()
      .setTitle("Naruto :book:")
      .setDescription("**Information :**\n\n***Naruto*** (ナルト?) est un shōnen manga écrit et dessiné par Masashi Kishimoto. Naruto a été prépublié dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha entre septembre 1999 et novembre 2014. La série a été compilée en 72 tomes."
      +"La version française du manga est publiée par Kana entre mars 2002 et novembre 20161."  
      +"À la suite de son succès sous forme de manga, une adaptation en anime est réalisée par les studios Pierrot et Aniplex et est diffusée sur TV Tokyo depuis le 3 octobre 2002. Une seconde partie du récit a aussi vu le jour et a été renommée Naruto Shippuden lors de son adaptation."
      +"La série animée est diffusée en France depuis le 2 janvier 2006 sur Game One2 ainsi que sur NT1 et sur Cartoon Network depuis la rentrée 2007. En Belgique, elle est diffusée sur Club RTL depuis la rentrée 2008."
      +"Game One diffuse aussi depuis le 5 septembre 2008 la seconde série : Naruto Shippuden. Les épisodes sont également proposés en version originale sous-titrée en français en simulcast sur J-One, Netflix et Anime Digital Network."
      +"Avec plus de 250 millions de copies, Naruto est le troisième manga le plus vendu dans le monde (après One Piece et Dragon Ball)3 et l'une des bandes dessinées les plus vendues au monde. En raison de son succès, des récits inédits sont également produits régulièrement sous forme de longs métrages d'animation entre 2004 et 2015.\n\n (Source Wikipédia)"
      +"\n\n **Date de sortie :**\n 20 septembre 1999 jusqu'à 10 novembre 2014"
      +"\n\n **Volumes :**\n 72"
      +"\n\n **Type :**\n Manga"
      +"\n\n **Thèmes :**\n Ninjas, drame, combats, art martiaux")
      .setColor("RANDOM")
      message.channel.send(manga2Embed)
  }
})

client.on('message', function (message) {
  if (message.content === "?manga dragon ball z") {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**")
    }
    const manga3Embed = new Discord.MessageEmbed()
      .setTitle("Dragon Ball Z :book:")
      .setDescription("**Information :**\n\n***Dragon Ball Z*** (ドラゴンボールZ(ゼット), Doragon Bōru Zetto?, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise Dragon Ball d'Akira Toriyama"
      +"et produite par Toei Animation. Cette série fait suite à l’anime Dragon Ball et adapte les vingt-six derniers volumes du manga, publiés de 1988 à 1995."  
      +"La série a été initialement diffusée le 26 avril 1989 sur Fuji Television, au Japon, avec un nouvel horaire par rapport à la série antérieur, en 291 épisodes de 25 minutes, le dernier ayant été diffusé le"
      +"31 janvier 1991. Une version remastérisée et remontée en 167 épisodes (159 en VO), intitulée Dragon Ball Z Kai, a été diffusée du 5 avril 2009 au 28 juin 2015."
      +"Une suite alternative, intitulée Dragon Ball GT, a été diffusée du 7 février 1996 au 19 novembre 1997. Une suite directe au manga (hors Arc Oob), intitulée Dragon Ball Super, est diffusée depuis le 5 juillet 2015 sur Fuji TV."
      +"\n\n Source (Wikipédia)"
      +"\n\n **Date de sortie :**\n  	26 avril 1989 jusqu'au 31 janvier 1996"
      +"\n\n **Episodes :**\n 291"
      +"\n\n **Type :**\n Manga"
      +"\n\n **Thèmes :**\n Arts martiaux")
      .setColor("RANDOM")
      message.channel.send(manga3Embed)
  }
})

client.on('message', function (message) {
  if (message.content === "?manga one piece") {
    if (message.channel.type === "dm") {
      return message.channel.send(":x: | **Je ne peux pas effectuer les commandes privé !**")
    }
    const manga4Embed = new Discord.MessageEmbed()
      .setTitle("One Piece :book:")
      .setDescription("**Information :**\n\n***One Piece*** (ワンピース, Wan Pīsu?) est une série de mangas shōnen créée par Eiichirō Oda. Elle est prépubliée depuis"
      +" le 22 juillet 1997 dans le magazine hebdomadaire Weekly Shōnen Jump, puis regroupée en volumes reliés aux éditions Shūeisha depuis le 24 décembre 1997."
      +"En avril 2020, 96 tomes et plus de 970 chapitres sont commercialisés au Japon. La version française est publiée directement en volume reliés depuis le 1er septembre 2000 par Glénat."  
      +"93 volumes sont commercialisés en janvier 2020 en France. Depuis le 3 juillet 2013, une réédition a été éditée pour cause de problèmes de droit avec l'ancien traducteur."
      +"L'histoire suit les aventures de Monkey D. Luffy, un garçon dont le corps a acquis les propriétés du caoutchouc après avoir mangé par inadvertance un fruit du démon."
      +"Avec son équipage de pirates, appelé l'équipage de Chapeau de paille, Luffy explore Grand Line à la recherche du trésor ultime connu sous le nom de « One Piece » afin de devenir" 
      +"le prochain roi des pirates."
      +"Il est disponible sur la plate-forme de streaming Anime Digital Network et est diffusé sur les chaînes J-One, Game One et MCM. La licence compte 14 films, 11 épisodes spéciaux et 1 OAV, ainsi que 4 romans, 1 livre de recettes,"
      +"plus de 50 jeux vidéo, plus de 5000 figurines, un restaurant, un parc d’attraction, et une série live prévue pour 2020."
      +"\n\n Source (Wikipédia)"
      +"\n\n **Date de sortie :**\n 22 juillet 1997 jusqu'au ?"
      +"\n\n **Volumes :**\n 96"
      +"\n\n **Type :**\n Manga"
      +"\n\n **Thèmes :**\n Piraterie, amitié, liberté")
      .setColor("RANDOM")
      message.channel.send(manga4Embed)
  }
})

client.on('message', function (message) {

  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (message.content === prefix + "report") {

    let target = message.guild.member(message.mentions.users.first());

    if (!target) return message.reply(':x: | **Veuillez spécifier un membre à signaler** !');

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Membre signalé', `${target.user.username} avec l'ID: ${target.user.id}`)
        .addField('Signalé par', `${message.author.username} avec l'ID: ${message.author.id}`)
        .addField('Signalement fait à', message.createdAt)
        .setFooter('Informations utilisateur signalées', target.user.displayAvatarURL)
        .setTimestamp()
    message.channel.send(embed)
  }

})

client.login(config.token)
