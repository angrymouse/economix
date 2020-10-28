module.exports = async () => {
  Discord.TextChannel.prototype.msgInfo = async function(content, title) {
    let channel = this
    if (!title) {
      title = "Info"
    }
    return await channel.send(
      new Discord.MessageEmbed()
      .setColor("#68b0ab")
      .setFooter("©️ Angrymouse 2020")
      .setDescription(content)
      .setThumbnail("../Economix-logo.svg")
      .setTitle(title)
    )
  }
  Discord.TextChannel.prototype.msgError = async function(content, title) {
    let channel = this
    if (!title) {
      title = "Error"
    }
    return await channel.send(
      new Discord.MessageEmbed()
      .setColor("#af2d2d")
      .setThumbnail("https://discord.com/assets/ccb393b137e9218ac3af16b2c4617a2e.svg")
      .setFooter("©️ Angrymouse 2020")
      .setDescription(content)
      .setTitle(title)
    )
  }
  Discord.TextChannel.prototype.msgSuccess = async function(content, title) {
    let channel = this
    if (!title) {
      title = "Success"
    }
    return await channel.send(
      new Discord.MessageEmbed()
      .setColor("#28df99")
      .setThumbnail("../Economix-logo.svg")
      .setFooter("©️ Angrymouse 2020")
      .setDescription(content)
      .setTitle(title)
    )
  }
}
