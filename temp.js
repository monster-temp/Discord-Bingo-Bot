const Discord = require("discord.js")
const client = new Discord.Client()
const Command = require ('./command')
const Commandadmin = require ('./commandadmin')
const Roles = require ('./roles')
var game;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login(process.env.TOKEN)

//////////////////////////////////////////////////// Help

Command(client, 'help', (message) => {
var game= 0;


 const CEmbed1 = new Discord.MessageEmbed()

.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')

.addFields(
		{ name: 'Start using', value: '!start' },
		{ name: 'Win using', value: '!bingo' },
	)

   
    message.channel.send(CEmbed1);


})

//////////////////////////////

let msgId = [];
const bot = "887435349289230357";
var entry = 0;
var id = [];
var user =[];
var bing = 0;
var numbas = [];
var be = [];
var newArr = [];
var filler = [] ;
var start ;


//////////////////////////////////////
client.on("message", (message) => {
    if(message.content === "!start") {
      if(message.member.roles.cache.has('892056843566841866') || message.member.roles.cache.has('892027452820430909') || message.member.roles.cache.has('875111227502768238') || message.member.roles.cache.has('892051770551963718') || message.member.roles.cache.has('882010629815271424')){
      start = 1;
   
      
        message.channel.send(
          
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
                .setTitle("React with 🍀 for your banko card!")
        ).then(message => {
          setTimeout(function() {
          message.delete();

          message.channel.send(
          
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
                .setTitle("Banko game is now in progress!")
                
        ).then(message => {
          const username = message.author.tag;
var ongoing = 0;


var game= 1;
////////////////////////////////////////////////////////


for (var x=[],i=1;i<76;++i)  x.push(i);
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

x = shuffle(x);
var winner = 0;
   
var j = 0;                  

function myLoop() {         
  setTimeout(function() {   
    if (j < 75) {           
    message.channel.send(`${x[j]}`);
    filler.push(x[j]);
                           j++; 
      myLoop();   
///////////////////////////////////////////////////////
client.on("message", (message) => {
  if(message.content === "!bingo") {
      if((message.author.id !== bot)) {
       
        winner = 1;
        
j = 75;

  }
      }
  

})  

//////////////////////                     
    }   
   else  { 
if (winner == 0){
     
     message.channel.send(
          
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
                .setTitle("Game ended - No winners")
                
        ).then(message => {id.length = 0;

/// PUT EMPITES STUIFFF HERE


        })

     }  } 
             
  }, 5000)
     
}
myLoop();  

        })
      
      }, 10000)
            msgId.push(message.id);
            message.react("🍀");
            
        })
       
    }
}
})
/////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction._emoji.name == "🍀") {
    if(user.id !== bot) {
    
        if(reaction.message.id === msgId[0]) {
if (id.includes(user.id))         {
                        user.send("You have already entered this round!")
          

}
else {
            id.push(user.id);

           const name = user.username;
          const tag = user.discriminator;
                  


for (var a=[],i=1;i<76;++i)  a.push(i);

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);

for (var b=[],i=0;i<26;++i) {b.push(a[i]); 
 if (b[i] < 10) {
    b[i] = '0' + b[i];
  }
  else b[i] = '' + b[i];
}
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}



var msg = `\`\`\`\n╔════╦════╦════╦════╦════╗
║ ${b[1]} ║ ${b[2]} ║ ${b[3]} ║ ${b[4]} ║ ${b[5]} ║
╠════╬════╬════╬════╬════╣
║ ${b[6]} ║ ${b[7]} ║ ${b[8]} ║ ${b[9]} ║ ${b[10]} ║
╠════╬════╬════╬════╬════╣
║ ${b[11]} ║ ${b[12]} ║ XX ║ ${b[13]} ║ ${b[14]} ║
╠════╬════╬════╬════╬════╣
║ ${b[15]} ║ ${b[16]} ║ ${b[17]} ║ ${b[18]} ║ ${b[19]} ║
╠════╬════╬════╬════╬════╣
║ ${b[20]} ║ ${b[21]} ║ ${b[22]} ║ ${b[23]} ║ ${b[24]} ║
╚════╩════╩════╩════╩════╝\n\`\`\``;


numbas.push([user.id,b]);

console.table(numbas);


 const CEmbed = new Discord.MessageEmbed()
.setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
.setFooter(`${name}`+"#"+`${tag}`)
.setDescription(`${msg}`)

      user.send(CEmbed)
        }
        }
    }
}
});
                





       client.on("message", (message) => {
  if(message.content === "!bingo") {
      if((message.author.id !== bot)) {
       


  
     const user = message.author.tag;
if(message.author == client.user) return;
else{
console.log(message.id);

message.channel.send(
          
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
                .setTitle("Winner " + `${user}`)
          
              
        ).then(message => {id.length = 0;
        numbas.length = 0;
/// PUT EMPITES STUIFFF HERE

        })
        
}
  }
      }
  

}) 

Command(client, filler , (message) => {
  if((message.author.id !== bot)) {
    var temt = message ;

  const search = message.author.id;
  


let test =  numbas.findIndex(arr => arr.includes(search));






if (numbas[test][1].includes(`${message}`)) {
var indeks = numbas[test][1].indexOf(`${message}`);
numbas[test][1][indeks] = "XX";
let msg = numbas[test][1];
console.log(numbas[test][1]);
var msg2 = `\`\`\`\n╔════╦════╦════╦════╦════╗
║ ${numbas[test][1][1]} ║ ${numbas[test][1][2]} ║ ${numbas[test][1][3]} ║ ${numbas[test][1][4]} ║ ${numbas[test][1][5]} ║
╠════╬════╬════╬════╬════╣
║ ${numbas[test][1][6]} ║ ${numbas[test][1][7]} ║ ${numbas[test][1][8]} ║ ${numbas[test][1][9]} ║ ${numbas[test][1][10]} ║
╠════╬════╬════╬════╬════╣
║ ${numbas[test][1][11]} ║ ${numbas[test][1][12]} ║ XX ║ ${numbas[test][1][13]} ║ ${numbas[test][1][14]} ║
╠════╬════╬════╬════╬════╣
║ ${numbas[test][1][15]} ║ ${numbas[test][1][16]} ║ ${numbas[test][1][17]} ║ ${numbas[test][1][18]} ║ ${numbas[test][1][19]} ║
╠════╬════╬════╬════╬════╣
║ ${numbas[test][1][20]} ║ ${numbas[test][1][21]} ║ ${numbas[test][1][22]} ║ ${numbas[test][1][23]} ║ ${numbas[test][1][24]} ║
╚════╩════╩════╩════╩════╝\n\`\`\``;


      message.author.send(new Discord.MessageEmbed()
               .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
.setFooter(message.author.tag)
.setDescription(`${msg2}`)
      )



console.log(message.author.tag);


}









}
})





