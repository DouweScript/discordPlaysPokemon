const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const prefix = '-';

//Array met alle commands die er bestaan
const allCommands = ['a', 'b', 'up', 'right', 'down', 'left', 'start', 'select'];


//Print in de console wanneer de bot online gaat
client.once('ready', () =>{
    console.log("Bot is online")
});

//Checkt of alle files in de commands folder een JavaScript bestand zijn
const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//regeert op berichten die worden verzonden in een discord textkanaal
client.on('message', message =>{
  if(message.channel.id != 835109662289297418){
    return
  }

  //gaat door alle commands in de array heen
  for(i = 0; i<allCommands.length; i++){

    //Als het ingevoerde command in de array met bestaande commands is voor hem dan uit
    if (message.content.toLowerCase() == allCommands[i]){
      client.commands.get(allCommands[i]).execute(message);
    }
  }
});

//gebruikt een token om in te loggen
client.login(token);

