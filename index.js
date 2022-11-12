const Discord = require("discord.js")
const axios = require("axios")
const keepAlive = require("./server")
const channel_id = "1015591428925173772"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING"
  ],

  partials: [
    "MESSAGE", 
    "CHANNEL", 
    "REACTION"
  ]
})

require("dotenv").config()

client.on("ready", () => {
  console.log(`I am here to talk to my friends AKA ${client.user.tag}`)
  console.log(channel_id)
  client.user.setActivity("Your Heart Go Brrr 💘", { type: "WATCHING" })
})


client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return
  if (message.content === ("Help me with my studies")) return
  if (message.reference) return
  if (message.mentions.users.first()) return
  if (message.mentions.roles.first()) return
  if (message.mentions.channels.first()) return
  if (message.mentions.everyone) return
  if (message.mentions.repliedUser) return
  if (message.mentions.has(client.user.id)) return
  if (message.content.startsWith("$")) return
  if (message.content.startsWith("!")) return
  if (message.content.startsWith("?")) return
  if (message.content.startsWith("%")) return
  if (message.content.startsWith("^")) return
  if (message.content.startsWith("&")) return
  if (message.content.startsWith("*")) return
  if (message.content.startsWith("(")) return
  if (message.content.startsWith(")")) return
  if (message.content.startsWith("()")) return
  if (message.content.startsWith("/")) return
  if (message.content.startsWith("+")) return
  if (message.content.startsWith("-")) return
  if (message.content.startsWith("`")) return
  if (message.content.startsWith("~")) return
  if (message.channel.id != channel_id) return
  let bid = process.env.bid
  let key = process.env.key
  let uid = message.author.id
  try {

      let res = await axios.get(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${encodeURIComponent(message.content)}`);
  
      const replyEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle("_ _\n " + res.data.cnt)
        .setDescription("_ _")
        .setThumbnail("https://media.discordapp.net/attachments/1033985742667526174/1033988074851549264/YouTube_Thumbnail_1280x720_px_1.png?width=1202&height=676")
        .setFooter({ text: "Thank You For Using Me 🤩" })
        
        message.reply({ embeds: [replyEmbed] });

  }  catch(err) {
    const errEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle('I Am Blanking Because Of Your Love 💞')
      .setDescription(':> err--')
      .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
      .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

    message.channel.send({ embeds: [errEmbed] });
    console.log(err)
  }
})

client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != channel_id) return
  if (message.content === "$ping") {
    try {

      const pingEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Bot's Ping =>")
      .setDescription("\n " + `\n🏓 Latency is **${Date.now() - message.createdTimestamp}**ms. \n \nAPI Latency is **${Math.round(client.ws.ping)}**ms.`)
      .setImage(client.user.avatarURL)
      .setFooter({ text: "Thank You For Using Me 🤩" })

      message.channel.send({ embeds: [pingEmbed] })
      message.react("👍")
      message.react("👎")

  }  catch(err) {
    const errEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle('I Am Blanking Because Of Your Love 💞')
    .setDescription(':> err--')
    .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
    .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

    message.channel.send({ embeds: [errEmbed] });
    console.log(err)
  }
  }
})

client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != channel_id) return
  if (message.content === "$joke") {
    try {

      let res = await axios.get(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single`);
      const replyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(res.data.joke)
        .setDescription(res.data.category)
        .setFooter({ text: "Thank You For Using Me 🤩" })
        
        message.reply({ embeds: [replyEmbed] });

  }  catch(err) {
    const errEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle('I Am Blanking Because Of Your Love 💞')
    .setDescription(':> err--')
    .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
    .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

    message.channel.send({ embeds: [errEmbed] });
    console.log(err)
  }
  }
})

client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != channel_id) return
  if (message.content === "$coinflip") {
    var headsortails = Math.floor(Math.random() * 2);
try {
  if (headsortails === 0) {
    message.channel.send("https://cdn.discordapp.com/attachments/1033985742667526174/1033988630840082453/Square_Graphic_Post_800x800_px_2.gif")
  }

  if (headsortails === 1) {
    message.channel.send("https://cdn.discordapp.com/attachments/1033985742667526174/1033988728256995358/Square_Graphic_Post_800x800_px_3.gif")
  }
} catch(err) {
  const errEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('I Am Blanking Because Of Your Love 💞')
  .setDescription(':> err--')
  .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
  .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

  message.channel.send({ embeds: [errEmbed] });
  console.log(err)
}
  }
})


client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != channel_id) return
  if (message.content === "Help me with my studies" || message.content === "$studiesguide") {
try {
  const studiesEmbed = new Discord.MessageEmbed

  const three =  "3️⃣"
  const four = "4️⃣"
  const five = "5️⃣"
  const six = "6️⃣"
  const seven = "7️⃣"
  const eight = "8️⃣"
  const nine = "9️⃣"
  const ten = "🔟"
  const eleven = "🥇"
  const twelve = "🥈"

  studiesEmbed.setColor("RANDOM")
  studiesEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
  studiesEmbed.setDescription("Please Select Your Class! \n 🥇 - 11th \n 🥈 - 12th")
  studiesEmbed.setThumbnail(client.user.avatarURL)
  studiesEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
  studiesEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

    let messageEmbed = await message.channel.send({ embeds: [studiesEmbed] })

    messageEmbed.react(three)
    messageEmbed.react(four)
    messageEmbed.react(five)
    messageEmbed.react(six)
    messageEmbed.react(seven)
    messageEmbed.react(eight)
    messageEmbed.react(nine)
    messageEmbed.react(ten)
    messageEmbed.react(eleven)
    messageEmbed.react(twelve)

    const filter = (reaction, user) => {
      return [three, four, five, six, seven, eight, nine, ten, eleven, twelve].includes(reaction.emoji.name) && user.id === message.author.id;
    }

    messageEmbed.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === three) {
          const threeEmbed = new Discord.MessageEmbed()
          threeEmbed.setColor("RANDOM")
          threeEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          threeEmbed.setDescription("https://solutiongyan.com/dav-class-3/")
          threeEmbed.setThumbnail(client.user.avatarURL)
          threeEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          threeEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [threeEmbed] })
        } else if (reaction.emoji.name === four) {
          const fourEmbed = new Discord.MessageEmbed()
          fourEmbed.setColor("RANDOM")
          fourEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          fourEmbed.setDescription("https://solutiongyan.com/dav-class-4/")
          fourEmbed.setThumbnail(client.user.avatarURL)
          fourEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          fourEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [fourEmbed] })
        }else if (reaction.emoji.name === five) {
          const fiveEmbed = new Discord.MessageEmbed()
          fiveEmbed.setColor("RANDOM")
          fiveEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          fiveEmbed.setDescription("https://solutiongyan.com/dav-class-5/")
          fiveEmbed.setThumbnail(client.user.avatarURL)
          fiveEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          fiveEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [fiveEmbed] })
        } else if (reaction.emoji.name === six) {
          const sixEmbed = new Discord.MessageEmbed()
          sixEmbed.setColor("RANDOM")
          sixEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          sixEmbed.setDescription("https://solutiongyan.com/dav-class-6/")
          sixEmbed.setThumbnail(client.user.avatarURL)
          sixEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          sixEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [sixEmbed] })
        } else if (reaction.emoji.name === seven) {
          const sevenEmbed = new Discord.MessageEmbed()
          sevenEmbed.setColor("RANDOM")
          sevenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          sevenEmbed.setDescription("https://solutiongyan.com/dav-class-7/")
          sevenEmbed.setThumbnail(client.user.avatarURL)
          sevenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          sevenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [sevenEmbed] })
        } else if (reaction.emoji.name === eight) {
          const eightEmbed = new Discord.MessageEmbed()
          eightEmbed.setColor("RANDOM")
          eightEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          eightEmbed.setDescription("https://solutiongyan.com/dav-class-8/")
          eightEmbed.setThumbnail(client.user.avatarURL)
          eightEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          eightEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [eightEmbed] })
        } else if (reaction.emoji.name === nine) {
          const nineEmbed = new Discord.MessageEmbed()
          nineEmbed.setColor("RANDOM")
          nineEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          nineEmbed.setDescription("https://www.youtube.com/c/EduMagnet/playlists?view=50&shelf_id=9")
          nineEmbed.setThumbnail(client.user.avatarURL)
          nineEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          nineEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [nineEmbed] })
        } else if (reaction.emoji.name === ten) {
          const tenEmbed = new Discord.MessageEmbed()
          tenEmbed.setColor("RANDOM")
          tenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          tenEmbed.setDescription("https://www.learncbse.in/ncert-solutions-2/#NCERT_Solutions_For_Class_10")
          tenEmbed.setThumbnail(client.user.avatarURL)
          tenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          tenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [tenEmbed] })
        } else if (reaction.emoji.name === eleven) {
          const elevenEmbed = new Discord.MessageEmbed()
          elevenEmbed.setColor("RANDOM")
          elevenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          elevenEmbed.setDescription("https://www.learncbse.in/ncert-solutions-for-class-11/")
          elevenEmbed.setThumbnail(client.user.avatarURL)
          elevenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          elevenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [elevenEmbed] })
        } else if (reaction.emoji.name === twelve) {
          const twelveEmbed = new Discord.MessageEmbed()
          twelveEmbed.setColor("RANDOM")
          twelveEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          twelveEmbed.setDescription("https://www.learncbse.in/ncert-solutions-for-class-12/")
          twelveEmbed.setThumbnail(client.user.avatarURL)
          twelveEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          twelveEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [twelveEmbed] })
        }
      }).catch(collected => {
        const noReactionEmbed = new Discord.MessageEmbed()
        noReactionEmbed.setColor("RED")
        noReactionEmbed.setTitle(`_ _`)
        noReactionEmbed.setDescription("You Didn't React In Time")
        noReactionEmbed.setThumbnail(client.user.avatarURL)
        noReactionEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
        noReactionEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

        message.channel.send({ embeds: [noReactionEmbed] })
        messageEmbed.reactions.removeAll()
      });
} catch(err) {
  const errEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('I Am Blanking Because Of Your Love 💞')
  .setDescription(':> err--')
  .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
  .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

  message.channel.send({ embeds: [errEmbed] });
  console.log(err)
}
  }
})


client.on('messageCreate', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != channel_id) return
  if (message.content === "Show me the study materials" || message.content === "$e-books") {
try {
  const eBooksEmbed = new Discord.MessageEmbed

  const LKG = "⭐"
  const UKG = "🌟"
  const one = "1️⃣"
  const two = "2️⃣"
  const three =  "3️⃣"
  const four = "4️⃣"
  const five = "5️⃣"
  const six = "6️⃣"
  const seven = "7️⃣"
  const eight = "8️⃣"
  const nine = "9️⃣"
  const ten = "🔟"
  const eleven = "🥇"
  const twelve = "🥈"

  eBooksEmbed.setColor("RANDOM")
  eBooksEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
  eBooksEmbed.setDescription("Please Select Your Class! \n ⭐ - LKG \n 🌟 - UKG \n 🥇 - 11th \n 🥈 - 12th")
  eBooksEmbed.setThumbnail(client.user.avatarURL)
  eBooksEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
  eBooksEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

    let messageEmbed = await message.channel.send({ embeds: [eBooksEmbed] })

    await messageEmbed.react(LKG)
    await messageEmbed.react(UKG)
    messageEmbed.react(one)
    messageEmbed.react(two)
    messageEmbed.react(three)
    messageEmbed.react(four)
    messageEmbed.react(five)
    messageEmbed.react(six)
    messageEmbed.react(seven)
    messageEmbed.react(eight)
    messageEmbed.react(nine)
    messageEmbed.react(ten)
    messageEmbed.react(eleven)
    messageEmbed.react(twelve)

    const filter = (reaction, user) => {
      return [LKG, UKG, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve].includes(reaction.emoji.name) && user.id === message.author.id;
    }

    messageEmbed.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === LKG) {
          const LKGEmbed = new Discord.MessageEmbed()
          LKGEmbed.setColor("RANDOM")
          LKGEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          LKGEmbed.setDescription('https://drive.google.com/drive/folders/1azdH7NH22EW_yGyh251n6HnF2v5-b_9X')
          LKGEmbed.setThumbnail(client.user.avatarURL)
          LKGEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          LKGEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [LKGEmbed] })
        } else if (reaction.emoji.name === UKG) {
          const UKGEmbed = new Discord.MessageEmbed()
          UKGEmbed.setColor("RANDOM")
          UKGEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          UKGEmbed.setDescription('https://drive.google.com/drive/folders/1jRJBuL2ATMn8tRiv0NMVTgSl_eIfXx4F')
          UKGEmbed.setThumbnail(client.user.avatarURL)
          UKGEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          UKGEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [UKGEmbed] })
        } else if (reaction.emoji.name === one) {
          const oneEmbed = new Discord.MessageEmbed()
          oneEmbed.setColor("RANDOM")
          oneEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          oneEmbed.setDescription('https://drive.google.com/drive/folders/1T68sg7VaP-0Z1_dqcmIDHwRmzdkh9yK6')
          oneEmbed.setThumbnail(client.user.avatarURL)
          oneEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          oneEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [oneEmbed] })
        } else if (reaction.emoji.name === two) {
          const twoEmbed = new Discord.MessageEmbed()
          twoEmbed.setColor("RANDOM")
          twoEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          twoEmbed.setDescription('https://drive.google.com/drive/folders/1JBcoFe4MXgn2OwYgcjtqt6p52mie8I0Y')
          twoEmbed.setThumbnail(client.user.avatarURL)
          twoEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          twoEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [twoEmbed] })
        } else if (reaction.emoji.name === three) {
          const threeBookEmbed = new Discord.MessageEmbed()
          threeBookEmbed.setColor("RANDOM")
          threeBookEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          threeBookEmbed.setDescription("https://drive.google.com/file/d/1sM-tNNs4ky6GIrCUWZuVWWKmwBZBT9-A/view")
          threeBookEmbed.setThumbnail(client.user.avatarURL)
          threeBookEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          threeBookEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [threeBookEmbed] })
        } else if (reaction.emoji.name === four) {
          const fourEmbed = new Discord.MessageEmbed()
          fourEmbed.setColor("RANDOM")
          fourEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          fourEmbed.setDescription("https://drive.google.com/drive/folders/1SFcONEGqY2Q-AAFQ-1-8nbxooP7rFCCy")
          fourEmbed.setThumbnail(client.user.avatarURL)
          fourEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          fourEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [fourEmbed] })
        }else if (reaction.emoji.name === five) {
          const fiveEmbed = new Discord.MessageEmbed()
          fiveEmbed.setColor("RANDOM")
          fiveEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          fiveEmbed.setDescription("https://drive.google.com/drive/folders/1QD-Auw-RK1hkCoYCH7GZyay4Egx5vc-n")
          fiveEmbed.setThumbnail(client.user.avatarURL)
          fiveEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          fiveEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [fiveEmbed] })
        } else if (reaction.emoji.name === six) {
          const sixEmbed = new Discord.MessageEmbed()
          sixEmbed.setColor("RANDOM")
          sixEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          sixEmbed.setDescription("https://drive.google.com/drive/folders/1ZCUdpcWAp6vAXAoUqtl3tpDyQzS9AXyL")
          sixEmbed.setThumbnail(client.user.avatarURL)
          sixEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          sixEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [sixEmbed] })
        } else if (reaction.emoji.name === seven) {
          const sevenEmbed = new Discord.MessageEmbed()
          sevenEmbed.setColor("RANDOM")
          sevenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          sevenEmbed.setDescription("https://drive.google.com/drive/folders/1oTkqh_uZIVGaQkHb8zUO0ZKadHkZDCIH")
          sevenEmbed.setThumbnail(client.user.avatarURL)
          sevenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          sevenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [sevenEmbed] })
        } else if (reaction.emoji.name === eight) {
          const eightEmbed = new Discord.MessageEmbed()
          eightEmbed.setColor("RANDOM")
          eightEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          eightEmbed.setDescription("https://drive.google.com/drive/folders/1Y6YHeNRew2BuV4__b_6wi3CjtM4LchDW")
          eightEmbed.setThumbnail(client.user.avatarURL)
          eightEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          eightEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [eightEmbed] })
        } else if (reaction.emoji.name === nine) {
          const nineEmbed = new Discord.MessageEmbed()
          nineEmbed.setColor("RANDOM")
          nineEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          nineEmbed.setDescription("https://ncert.nic.in/textbook.php?jemh1=0-15")
          nineEmbed.setThumbnail(client.user.avatarURL)
          nineEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          nineEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [nineEmbed] })
        } else if (reaction.emoji.name === ten) {
          const tenEmbed = new Discord.MessageEmbed()
          tenEmbed.setColor("RANDOM")
          tenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          tenEmbed.setDescription("https://ncert.nic.in/textbook.php?jemh1=0-15")
          tenEmbed.setThumbnail(client.user.avatarURL)
          tenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          tenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [tenEmbed] })
        } else if (reaction.emoji.name === eleven) {
          const elevenEmbed = new Discord.MessageEmbed()
          elevenEmbed.setColor("RANDOM")
          elevenEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          elevenEmbed.setDescription("https://ncert.nic.in/textbook.php?jemh1=0-15")
          elevenEmbed.setThumbnail(client.user.avatarURL)
          elevenEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          elevenEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [elevenEmbed] })
        } else if (reaction.emoji.name === twelve) {
          const twelveEmbed = new Discord.MessageEmbed()
          twelveEmbed.setColor("RANDOM")
          twelveEmbed.setTitle(`Hi I am @${client.user.tag}. I Am Here To Help You With Your Studies`)
          twelveEmbed.setDescription("https://ncert.nic.in/textbook.php?jemh1=0-15")
          twelveEmbed.setThumbnail(client.user.avatarURL)
          twelveEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
          twelveEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

          message.channel.send({ embeds: [twelveEmbed] })
        }
      }).catch(collected => {
        const noReactionEmbed = new Discord.MessageEmbed()
        noReactionEmbed.setColor("RED")
        noReactionEmbed.setTitle(`_ _`)
        noReactionEmbed.setDescription("You Didn't React In Time")
        noReactionEmbed.setThumbnail(client.user.avatarURL)
        noReactionEmbed.setImage("https://media.discordapp.net/attachments/1033985742667526174/1035518903729782794/YouTube_Channel_Art_2560x1440_px.png?width=1202&height=676")
        noReactionEmbed.setFooter({ text: "Thank You For Using Me 🤩" })

        message.channel.send({ embeds: [noReactionEmbed] })
        messageEmbed.reactions.removeAll()
      });
} catch(err) {
  const errEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('I Am Blanking Because Of Your Love 💞')
  .setDescription(':> err--')
  .setImage("https://media.discordapp.net/attachments/1033985742667526174/1033988088583692338/YouTube_Thumbnail_1280x720_px.gif")
  .setFooter({ text: "Sorry For The inconvenience Caused 😬" })

  message.channel.send({ embeds: [errEmbed] });
  console.log(err)
}
}
})


keepAlive()
client.login(process.env.TOKEN)

//end