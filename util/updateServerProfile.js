module.exports = async ( guild, update) => {

  let profile = await db.collection("guild-profiles").findOne({

    guild: guild
  })
  if (!profile) {
    profile = await util.resetProfile(id, guild)
  }
  profile = {
    ...profile,
    ...update
  }
  await db.collection("guild-profiles").updateOne({
    guild: guild
  }, {$set:update})
  return {...profile,...update}
}
