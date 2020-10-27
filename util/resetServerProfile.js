module.exports=async (guild)=>{
    await db.collection("guild-profiles").deleteMany({guild:guild})
    await db.collection("guild-profiles").insertOne(
      {
        guild:guild,
        currency:"💵",
        paymentPerMessage:{
          from:0,
          to:0
        },
        prefix:config.defaultPrefix,
          bankLimit:config.defaultBankLimit
      }
    )
    return  db.collection("guild-profiles").findOne({guild:guild})
}
