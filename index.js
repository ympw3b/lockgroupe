const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const bot = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });


client.on('ready', async () => {
    console.log(`Le script LockGroupe à été connecté sur le client suivant: ${client.user.tag}`)
})

var addUser = ''

client.on('message', async message => {
    if (message.content === '.lock') {
        message.edit('----').catch(console.error)
        setInterval(async () => {
                request(`https://discord.com/api/v9/channels/${message.channel.id}/recipients/${addUser}`, {
                    "headers": {
                        "accept": "*/*",
                        "authorization": `${client.token}`,
                    },
                    "method": "PUT",
                }, (err, response, body) => {
                 //   console.log(body)
                });
        }, 350);
    }
})

client.login('le_token');
