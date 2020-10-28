exports.requiredPermissions=["ADMINISTRATOR"]
exports.start=async(message)=>{
  if(message.monoArg.length<1){message.monoArg="%"}
  util.updateServerProfile(message.guild.id,{prefix:message.monoArg})
  message.channel.msgInfo(`${message.monoArg} is new prefix for this server!`,"Success")
}
