const { 
    Client, 
    GatewayIntentBits,
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

token="MTE2Njc5MDUzMTQ0ODMyNDExNw.Gw-IUF.G2AOdYP4h5lWVYsuzUzy9EDBFr56Z23eqLQPz0";

client.once('ready', () => {
    console.log(`Bot está logado como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});



client.login(token);