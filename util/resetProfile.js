module.exports=async(id,guild)=>{
  await db.collection("member-profiles").deleteMany({id:id,guild:guild})
  await db.collection("member-profiles").insertOne(
    {
      id:id,
      guild:guild,
      money:{
        bank:0,
        cash:0
      }
    }
  )
  return await db.collection("member-profiles").findOne({id:id,guild:guild})
}
