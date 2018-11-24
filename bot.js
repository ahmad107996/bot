const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!';
  client.on('ready', () => {
        client.user.setGame(`${prefix}help-all ||user : ${client.users.size}||server : ${client.guilds.size} `,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});


client.on('guildMemberRemove', member => {
let channel = member.guild.channels.find('name', 'welcome');
let memberavatar = member.user.avatarURL
console.log ("Server Friends")
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:arrow_upper_left:  `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| تبقا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("Dokhan Network - شبكة دخان")
    .setTimestamp()

  channel.sendEmbed(embed);
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", "welcome");
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});

client.on('guildMemberAdd', member => {
let channel = member.guild.channels.find('name', 'welcome');
let memberavatar = member.user.avatarURL
console.log ("Server Friends")
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد دخل:' , `لقد انضم عضو جديد هو , ${member}:arrow_lower_right:  `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| العدد الان',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("Dokhan Network - شبكة دخان")
    .setTimestamp()

  channel.sendEmbed(embed);
});
///by-hosam(galaxy-bot-dev)🚫
client.on('message', message => {
  if (message.content.startsWith(prefix + "c.role")) {
   if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
    message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**تم انشاء الرتب بنجاح**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "c.t")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('pic', 'text')
	 


     

message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "c.v")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});
client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'bc') { // الكوماند !bc
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم"))
    await message.channel.send("** ❓  حسنا, قم بكتابة ايدي البوت**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** رائع, الأن قم بكتابة مميزات بوتك ❓**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**اخيرا وليس اخرا, قم بكتابة عدد السيرفرات والمستخدمين ❓ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الأيدي :question:  : \n ${lan}\nالمميزات :link: :\n ${md} \nعدد السيرفرات والمستخدمين :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`Dokhan Network - شبكة دخان.`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 
})

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://media.discordapp.net/attachments/501111756895027217/501113041635770368/1313.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});
client.on('message', message => {
      if(message.content.startsWith(prefix + "help-all")) {
  const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر البوت__**`,`
╔╣help-general╠╗  الاوامر العامه
╔╣help-admin╠╗    الاوامر الاداره
╔╣help-game╠╗      اوامر الاعاب

prefix = ${prefix}
     ping = ${Date.now() - message.createdTimestamp}ms
     for help = ${client.user.tag}
`)
 message.channel.send({embed});
     }
    });
client.on('message', message => {
      if(message.content.startsWith(prefix + "help-game")) {
  const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر الاعاب__**`,`
-----------العاب----------

    **${prefix}صراحه**
     صارح نفسك او اخوياك

 **${prefix}pl**
لعبه حلوه و تعرف خبرتك في البرامج
اكتب 
${prefix}points :اعرف نقاطك
 **${prefix}8ball**
لو قلت شي وتبي اي البوت
**${prefix}marry**
اذا تبي تتزوج و البوت هو الشيخ بينكم

**${prefix}هل تعلم**
حقايق لم تكون تعرفها

prefix = ${prefix}
     ping = ${Date.now() - message.createdTimestamp}ms
     for help = ${client.user.tag}
`)
 message.channel.send({embed});
     }
    });

client.on('message', message => {
      if(message.content.startsWith(prefix + "help-admin")) {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر الاداره__**`,`
-----------الادمن----------    
  **${prefix}c.role**
     عشان يسوي رتب

  **${prefix}c.t**
  عشان يسوي لك الرومات الرئسيه

  **${prefix}mute**
مـيوت بدون رتبة

  **${prefix}unmute**
فك الميوت عنه

  **${prefix}c.v**
     عشان يسوي رومات صوتية

  **${prefix}giveaway**
لعمل القيف اواي

  **${prefix}bc**
ارسال رسله لي الجميع واذا كتبت
[user]
يتم كاتبت اسم العضو
     
  **${prefix}unban**
لفك الباند عن شخص معين

  **${prefix}tv**
لعمل روم موقت

     ping = ${Date.now() - message.createdTimestamp}ms
     for help = ${client.user.tag}
`)
 message.channel.send({embed});
     }
    });
client.on('message', message => {
      if(message.content.startsWith(prefix + "help-general")) {
  const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر البوت__**`,`
     **${prefix}تقديم**
   لو عندك بوت و تبي تدخله قدم

  **${prefix}level**
show xp+level

  **${prefix}topinv**
لمعرفت اكثر شخص ادخل اعضاء

  **${prefix}ping**
بنق البوت

  **${prefix}avatar**
الافاتر

**${prefix}send**
ارسال رسله الا خاص العضو بالمنشن


     prefix = ${prefix}
     ping = ${Date.now() - message.createdTimestamp}ms
     for help = ${client.user.tag}
        `)

      message.channel.send({embed});
     }
    });


client.on('message', message => {
      if(message.content.startsWith(prefix + "help-owner")) {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__أوامر البوت__**`,`
╔╣!setprefix╠╗  


prefix = ${prefix}
     ping = ${Date.now() - message.createdTimestamp}ms
     for help = ${client.user.tag}
`)
 message.channel.send({embed});
     }
    });


const p = {}
const devs = ['348953140315291649']
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'تم تغيير البرفكس ${newPrefix}**`);
} 


});


client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('!mute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = m3a4x.mentions.users.first()
let mas = m3a4x.author
if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
m3a4x.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${m3a4x.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})


client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('!unmute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = m3a4x.mentions.users.first()
 let mas = m3a4x.author
 if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 m3a4x.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
    // return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


var cats = [

"https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
"https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
      
   message.channel.sendEmbed(client);
   message.react("🙃")
    }
});


 client.on('message', async ReBeLL => {
if(ReBeLL.author.bot) return;
if (ReBeLL.channel.guild) {
if (ReBeLL.content.startsWith(prefix + `8ball`)) {
    let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
    let authorReBeL = ReBeLL.author.username;

    // https://en.wikipedia.org/wiki/Magic_8-Ball
    let ReBeL = [
        //إجآبآت إجآبيه
"هذا مؤكد.",
        "إنه بالتأكيد كذلك" ,
        "بدون أدنى شك.",
        "نعم بالتأكيد.",
        "يمكنك الاعتماد عليه.",
        "كما أرى أنه نعم.",
        "على الأرجح.",
        "توقعات جيدة.",
        "نعم فعلا.",
        "وتشير الدلائل إلى نعم.",

        // إجابات غير ملتزمة
        "الرد المحاولة مرة أخرى ضبابية.",
        "اسأل مرة اخرى لاحقا.",
        "الأفضل أن لا أقول لكم الآن.",
        "لا يمكن التنبؤ الآن.",
        "التركيز والمحاولة مرة أخرى." ,

        // إجابات سلبية
        "لا تعتمد على." ,
        "ردي هو لا.",
        "وتقول مصادري لا.",
        "أوتلوك ليس جيد بما فيه الكفاية.",
        "مشكوك فيه جدا."
    ]
    let randomReBeL = Math.floor(Math.random() * ReBeL.length);

    if (!argsReBeL) return ReBeLL.reply("اكتب كلامك عشان اقرر.");
    ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
}}});

   client.on('message', message => {
      if(message.content.startsWith ("!marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});


client.on('message', async najzx => {
    if(najzx.content.startsWith(prefix + 'tv')) {
      if(!najzx.member.hasPermission('MANAGE_CHANNELS')) return;
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 1 ولا اعلى من 15")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 15 || co.first().content < 1) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 15 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })

client.on('message' , najzx => {
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith(prefix + 'unban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
    }
  });


client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!';
    let xp = require("./xp.json");
    
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor('ff0000')
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});

const fs = require("fs");
client.on('message', async message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let xp = require("./xp.json");

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("لفل جديد!")
    .setColor("ff0000")
    .addField("لقد اصبحت لفل" , curlvl + 1);
    

    message.channel.send(lvlup).then(msg => {msg.delete(10000)});
  }
  fs.writeFile("xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
});

var ss = 0;



client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("348953140315291649").send(yumz)
            }
});


  
 client.on('message' , function (message){
      var token = 'NDA3OTUyMzcxMzMxODkxMjEx.Dlw7Kw.u9t6Za2rLvcTS4lIXzcR1AvvG2M'; // التوكن هنا بس
      if(message.content === 'res') {
if(message.author.id !== '348953140315291649') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
})


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith(prefix + 'صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("🤔")
 }
});


// جميع الحقوق لسيرفر كودز
// من صنع : ! EpicHema ★#6090




let points = JSON.parse(fs.readFileSync('./PL/plPTS.json', 'utf8')); // ! EpicHema ★#6090
client.on('message', message => { // ! EpicHema ★#6090
if (!points[message.author.id]) points[message.author.id] = { // ! EpicHema ★#6090
    points: 0, // ! EpicHema ★#6090
  }; // ! EpicHema ★#6090
if (message.content.startsWith(prefix + 'pl')) { // ! EpicHema ★#6090
    if(!message.channel.guild) return message.reply('**:x: هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000)); // ! EpicHema ★#6090
const type = require('./PL/pl.json'); // ! EpicHema ★#6090
const item = type[Math.floor(Math.random() * type.length)]; // ! EpicHema ★#6090
const filter = response => { // ! EpicHema ★#6090
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase()); // ! EpicHema ★#6090
}; // ! EpicHema ★#6090
message.channel.send('**لديك 15 ثانيه لتعرف اسم أي برنامج .**').then(msg => { // ! EpicHema ★#6090
 // ! EpicHema ★#6090 // ! EpicHema ★#6090 // ! EpicHema ★#6090 // ! EpicHema ★#6090
msg.channel.sendFile(`${item.image}`).then(() => { // ! EpicHema ★#6090
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] }) // ! EpicHema ★#6090
        .then((collected) => { // ! EpicHema ★#6090
        message.channel.send(`${collected.first().author} ✅ **إجابة صحيحة .**`); // ! EpicHema ★#6090
        console.log(`[Typing] ${collected.first().author} typed the word.`); // ! EpicHema ★#6090
            let userData = points[message.author.id]; // ! EpicHema ★#6090
            userData.points++; // ! EpicHema ★#6090
          }) // ! EpicHema ★#6090
          .catch(collected => { // ! EpicHema ★#6090
            message.channel.send(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: الاجابه هي : __${item.answers}__ **`); // ! EpicHema ★#6090
            console.log('[Typing] Error: No one type the word.'); // ! EpicHema ★#6090
          }) // ! EpicHema ★#6090
        }) // ! EpicHema ★#6090
    }) // ! EpicHema ★#6090
} // ! EpicHema ★#6090
}); // ! EpicHema ★#6090
 // ! EpicHema ★#6090 // ! EpicHema ★#6090 // ! EpicHema ★#6090 // ! EpicHema ★#6090
client.on('message', message => { // ! EpicHema ★#6090
if (message.content.startsWith(prefix + 'points')) { // ! EpicHema ★#6090
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000)); // ! EpicHema ★#6090
    let userData = points[message.author.id]; // ! EpicHema ★#6090
    let embed = new Discord.RichEmbed() // ! EpicHema ★#6090
    .setAuthor(`${message.author.tag}`, message.author.avatarURL) // ! EpicHema ★#6090
    .setColor('#000000') // ! EpicHema ★#6090
    .setDescription(`نقاطك: \`${userData.points}\``) // ! EpicHema ★#6090
    message.channel.sendEmbed(embed) // ! EpicHema ★#6090
  } // ! EpicHema ★#6090 // ! EpicHema ★#6090 // ! EpicHema ★#6090
  fs.writeFile("./PL/plPTS.json", JSON.stringify(points), (err) => { // ! EpicHema ★#6090
    if (err) console.error(err) // ! EpicHema ★#6090
  }) // ! EpicHema ★#6090
}); // ! EpicHema ★#6090

client.login("process.env.TOKEN")
