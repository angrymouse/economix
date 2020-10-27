module.exports = async () => {
  Discord.TextChannel.prototype.msgInfo = async function(content,title) {
    let channel = this
    if(!title){title="Info"}
    return await channel.send(
      new Discord.MessageEmbed()
      .setColor("#7579e7")
      .setFooter("©️ Angrymouse 2020")
      .setDescription(content)
      .setTitle(title)
    )
  }
  Discord.TextChannel.prototype.msgError = async function(content,title) {
    let channel = this
    if(!title){title="Error"}
    return await channel.send(
      new Discord.MessageEmbed()
      .setColor("#af2d2d")
      .setFooter("©️ Angrymouse 2020")
      .setDescription(content)
      .setTitle(title)
    )
  }
}
