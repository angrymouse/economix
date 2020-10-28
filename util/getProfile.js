module.exports = async (id, guild) => {

  let profile = await db.collection("member-profiles").findOne({
    id: id,
    guild: guild
  })
  if (!profile) {
    profile = await util.resetProfile(id, guild)
  }
  return profile
}
