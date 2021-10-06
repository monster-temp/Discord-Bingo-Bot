const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }

  client.on('message', (message) => {
    const { content } = message
    aliases.forEach((alias) => {
      const command = `${alias}`

      if (content.toLowerCase().startsWith(`${command} `) || content === command) {
        if(message.member.roles.cache.has('878575934842732594')){

        message.channel.send("Your highest role is: Pixie Ambassadors  - Max reserved mints: 10 | A noble or royal NPC will be named after you in-game. You may be invited to help us design it. You will also appear in the game's credits. You are guaranteed a free or heavily discounted land parcel when we approach land sale.");
        }
        else if (message.member.roles.cache.has('878055708292186142'))
        {
         message.channel.send("Your highest role is: Chieftains  - Max reserved mints: 5 | A monster, rare mob, elite spawn or similar will be named after you in-game. You will also appear in the game credits.");
        }
     else if (message.member.roles.cache.has('875787988855029761'))
        {
         message.channel.send("Your highest role is: Early Birds  - Max reserved mints: 3 | Some of you may see your names used for common NPCs, vendors, quest givers, similar. You will also appear in the game credits.");
        }
        
      }
    })
  })
}

