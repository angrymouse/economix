module.exports=async(message)=>{
if(message.author.bot||!message.guild){return}
let serverProfile=await util.getServerProfile(message.guild.id)
let memberProfile=await util.getProfile(message.author.id,message.guild.id)

if(message.content.startsWith(serverProfile.prefix)){

  let content=message.content.split("").slice(serverProfile.prefix.length).join("")
  let args=content.split(" ")
  let command=args[0]

  args.splice(0,1)

  if(fs.existsSync(`./commands/${command}.js`)){

    let commandModule=require(`./commands/${command}.js`)
    if(!commandModule.requiredPermissions){commandModule.requiredPermissions=[]}
    let missingPermissions=message.member.permissions.missing(commandModule.requiredPermissions)
  if(missingPermissions.length>0){
    return message.channel.msgError(`Sorry, you need those permissions to execute \`\`${command}\`\` command: ${missingPermissions.map(perm=>`\`\`${perm}\`\``).join("")} `)
  }else{
    message.guild.profile=serverProfile
    message.member.profile=memberProfile
    message.args=args
    message.monoArg=args.join(" ")
    commandModule.start(message)
  }
  }
}
}
