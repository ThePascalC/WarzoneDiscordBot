// Require Discord.js
const Discord = require('discord.js');

// Your Discord Token
// Put in String
const token = 'YOUR_DISCORD_TOKEN';

const client = new Discord.Client();

// Declare Array's of Discord Locations
let warzoneLocations = ['Dam', 'Military Base', 'Quarry', 'Airport', 'TV Station', 'Storage Town', 'Superstore', 'Boneyard', 'Train Station', 'Promenade West', 
'Promenade East', 'Hills', 'Hospital', 'Stadium', 'Downtown', 'Park', 'Port', 'Lumber', 'Farmland', 'Prison', 'Train'];
let warzoneContracts = ['Recon', 'Scavenger', 'Bounty', 'Most Wanted', 'Supply Run'];

// While Bot is on Check for Commands in the Client
client.on('message', (msg) => {

     if(msg.content === '!pickdrop'){
        let randomLocation = Math.floor(Math.random() * warzoneLocations.length);
        let randomContract = Math.floor(Math.random() * warzoneContracts.length);
        msg.channel.send(`Hi ${msg.author}, you must drop in ` + warzoneLocations[randomLocation] + ' and do a ' + warzoneContracts[randomContract] + ' contract!');
    }
    if(msg.content === '!pickcontract'){
        let randomContract = Math.floor(Math.random() * warzoneContracts.length);
        msg.channel.send(`Hi ${msg.author}, you must complete a ` + warzoneContracts[randomContract] + ' contract!');
    }
    if(msg.content === '!commands'){
        msg.channel.send("Current Commands: !pickdrop, !pickcontract")
    }
    });


client.on('ready', () => {
    console.log('Bot is now connected');
    client.channels.cache.find(x => x.name === 'DISCORD_CHANNEL_NAME').send('Hello! I\'m now connected! Type !commands for commands...');
});

client.login(process.env.BOT_TOKEN);