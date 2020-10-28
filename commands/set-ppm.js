exports.requiredPermissions = ["ADMINISTRATOR"]
exports.start = async (message) => {
  if (message.args.length < 2 || message.args.slice(0, 2).some(el => isNaN(el))) {
    return message.channel.msgError("Invalid arguments. Usage: https://tbl.click/economix/help")
  }
  util.updateServerProfile(message.guild.id, {
    paymentPerMessage: {
      from: parseFloat(message.args[0]),
      to: parseFloat(message.args[1])
    }
  });
   message.channel.msgInfo(`Payment per message now is random number from ${message.args[0]} and up to ${message.args[1]}!`, "Success")
}
