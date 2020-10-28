module.exports = async (id, guild, update) => {

  let profile = await db.collection("member-profiles").findOne({
    id: id,
    guild: guild
  })
  if (!profile) {
    profile = await util.resetProfile(id, guild)
  }

  await db.collection("member-profiles").updateOne({
    id: id,
    guild: guild
  }, {$set:update})
  return {...profile,...update}
}
