const { prefix } = require('./config.json')


module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }

  client.on('message', (message) => {
    const { content } = message
    aliases.forEach((alias) => {
       const command = `${prefix}${alias}`

      if (content.toLowerCase().startsWith(`${command}`) || content === command) {
        if(message.member.roles.cache.has('888013739675246592')){

     
        console.log(`Running the command ${command}`)
        
        callback(message)    

        }
        else
        {

         message.channel.send("Can not be started by you!");
        }
     
        
      }
    })
  })
}