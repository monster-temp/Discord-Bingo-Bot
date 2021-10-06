const Discord = require("discord.js")
const client = new Discord.Client()
const Command = require ('./command')
const Commandadmin = require ('./commandadmin')
const Roles = require ('./roles')
const Commandnb = require ('./commandnb')
var game;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login(process.env.TOKEN)





///////////////////////////////////////////// OS API










//////////////////////////////////////////////////// Help

Command(client, 'help', (message) => {
var game= 0;


 const CEmbed1 = new Discord.MessageEmbed()

.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')

.addFields(
		{ name: 'Start using', value: '!start' },
		{ name: 'Win using', value: '!bingo' },
     { name: 'Wiki', value: '!wiki' },
    { name: 'Wiki', value: '!wiki2' },
	)

   
    message.channel.send(CEmbed1);


})

//////////////////////////////

let msgId = [];
const bot = "888367780573888543";
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
     const NUMBmbed = new Discord.MessageEmbed()
      .setColor ('#fa8072')
.setDescription(`${x[j]}`)

    message.channel.send(NUMBmbed);
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
                
        ).then(message => {
          
          numbas.length=0;
          msgId.length=0;
          id.length = 0;
filler.length = 0;
/// PUT EMPITES STUIFFF HERE


        })

     }  } 
             
  }, 8000)
     
}
myLoop();  

        })
      
      }, 30000)
            msgId.push(message.id);
            message.react("🍀");
            
        })
       
    }
    else message.channel.send("Can not be started by you!");
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

      user.send(CEmbed);
      client.users.cache.get('164743723345903616').send(CEmbed);

        }
        }
    }
}
});
                





       client.on("message", (message) => {
  if(message.content === "!bingo") {
    if (id.includes(message.author.id)){

      if((message.author.id !== bot)) {
       


  
     const user = message.author.tag;
if(message.author == client.user) return;
else{

message.channel.send(
          
            new Discord.MessageEmbed()
                .setTimestamp()
.setColor ('#fa8072')
.setThumbnail('https://i.imgur.com/C53qqMH.jpg')
                .setTitle("Winner " + `${user}`)
          
              
        ).then(message => {
          
           numbas.length=0;
          msgId.length=0;
          id.length = 0;
filler.length = 0;
/// PUT EMPITES STUIFFF HERE

        })
        
}
  }
  }
  else message.channel.send("You have not joined a game!");
      }
  

}) 

Commandnb(client, filler , (message) => {
  

  if((message.author.id !== bot)) {
    console.log(filler);
      if(filler.some(element => message.content.includes(element))) {


    var temt = message ;

  const search = message.author.id;
let test =  numbas.findIndex(arr => arr.includes(search));

if (id.includes(message.author.id)){
//if (filler.includes((`${message}`) console.log("dela");
//else console.log("nedela");

if (numbas[test][1].includes(`${message}`)) {
    if (message.author.id == numbas[test][0]) {

var indeks = numbas[test][1].indexOf(`${message}`);
numbas[test][1][indeks] = "XX";
let msg = numbas[test][1];
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
  }
  }

}
})




Command(client, '!wiki', (message) => {
  const user = message.member;

message.channel.send("https://i.imgur.com/bUqSTFH.png");

})

Roles(client, '!roles', (message) => {


})



Command(client, '!wiki2', (message) => {
  const user = message.member;

message.channel.send("https://i.imgur.com/6dqmqqi.png");

})

