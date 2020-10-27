module.exports=async (guild)=>{
    let serverProfile=await db.collection("guild-profiles").findOne({guild:guild})
  if(!serverProfile){
    serverProfile=await util.resetServerProfile(guild)
  }
  return serverProfile
}
