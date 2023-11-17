require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', 
  prefix: process.env.PREFIX || '.', 
  ownerID: process.env.OWNERID?.split(',') || ['948093919835590666','801043516406104155'], 
  SpotifyID: process.env.SPOTIFYID || '7cb195a121c74af3b457a87873358abc', 
  SpotifySecret: process.env.SPOTIFYSECRET || '7f33f38e4b03485bba824f6a001ad3c2', 
  mongourl: process.env.MONGO_URI || '', 
  embedColor: process.env.COlOR || '#58b9ff', // 
  logs: process.env.LOGS || '', 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/MwV9tm6RPX',
    invite: process.env.INVITE || 'https://discord.gg/MwV9tm6RPX',
    vote: process.env.VOTE || 'https://discord.gg/MwV9tm6RPX',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/1173214465521635350/1173531936183046195/sss1.png'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'fi1.bot-hosting.net:6964',
      name: process.env.NODE_NAME || 'Mimo',
      auth: process.env.NODE_AUTH || 'sygsys-lavalink-v3',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
