let util=require('../util/map.js')
module.exports = class MemberProfile{
  constructor (id,guild){
    this.guild=guild
    this.id=id
  }
  async fetch(){
    return await util.getProfile(this.id,this.guild)
  }
  async update(changes){
    return await util.updateProfile(this.id,this.guild,changes)
  }
  async reset(){
    return await util.resetProfile(this.id,this.guild)
  }
};
