const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }

  client.on('message', (message) => {
  

    aliases.forEach((alias) => {
      const command = `${alias}`.toLowerCase()


        callback(message)
    
    })
  })
}