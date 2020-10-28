exports.start=async (message)=>{
let member=message.mentions.members.first()||message.member
let memberProfile=await util.getProfile(member.id,member.guild.id)
  message.channel.send(new Discord.MessageEmbed()
.setColor(member.color)
.setThumbnail(member.guild.iconURL())
.setAuthor(message.author.username,message.author.avatarURL())
.addField("Nickname",member.nickname||member.user.username,true)
.addField("Tag",member.user.tag,true)
.addField("Money",`
-  **Cash:** ${memberProfile.money.cash}
-  **Bank:** ${memberProfile.money.bank}`,false)
.addField("Roles",member.roles.cache.filter(r=>r.name!=="@everyone").map(r=>`<@&${r.id}>`).join(" "))
)

}
