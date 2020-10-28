process.chdir(__dirname)
global.Discord = require("discord.js")
global.MongoClient = require("mongodb").MongoClient
global.util = require("./util/map.js")
global.fs=require("fs")
global.struct=require('./struct/base.js')
global.config = require("./config.json")
global.client = new Discord.Client({
  disableEveryone: true
});
async function ready () {
fs.readdirSync("./handlers").forEach(file=>{
  let event=file.split(".").slice(0,-1)

   client.on(event,require("./handlers/"+file))
})
}

MongoClient.connect(config.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async (err, host) => {
  global.db = host.db("economix");
  util.setPrototypes()
  client.login(config.token);
  client.once("ready",ready)
})
