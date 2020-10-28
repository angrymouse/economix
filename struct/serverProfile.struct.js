let util=require('../util/map.js')
module.exports = class ServerProfile{
  constructor (guild){
    this.guild=guild
  }
  async fetch(){
    return await util.getServerProfile(this.guild)
  }
  async update(changes){
    return await util.updateServerProfile(this.guild,changes)
  }
  async reset(){
    return await util.resetServerProfile(this.guild)
  }
};
