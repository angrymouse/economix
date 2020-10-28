exports.start = async (message) => {
  let target = message.mentions.members.first()
  if (!target) {
    return message.channel.msgError("You need to mention user to transfer money to him!")
  }
  let amount = Number(message.args[1])
  if (isNaN(amount)) {
    return message.channel.msgError("Invalid amount!")
  }
  let targetProfile = new struct.MemberProfile(target.user.id, target.guild.id)
  let guildProfile = new struct.ServerProfile(target.guild.id)
  let userProfile = new struct.MemberProfile(message.member.user.id, message.guild.id)
  let cached = {
    target: await targetProfile.fetch(),
    user: await userProfile.fetch(),
    guild: await guildProfile.fetch()
  }
  if (cached.user.money.cash < amount) {
    return message.channel.msgError("Your money on cash isn't enough to transfer this amount.")
  }
  if(amount<1){return message.channel.msgError("You can't transfer less than 1 "+cached.guild.currency+"!")}
  await targetProfile.update({
    money: {
      bank: cached.target.money.bank,
      cash: cached.target.money.cash + amount
    }
  })
  await userProfile.update({
    money: {
      bank: cached.user.money.bank,
      cash: cached.user.money.cash - amount
    }
  })
  message.channel.msgSuccess(`You successfully transfered ${amount} ${cached.guild.currency} to <@!${target.id}>!`)
}
