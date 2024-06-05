const { Client, MessageEmbed } = require('discord.js');

module.exports = (client, error, fileName, errorCode) => {
  const errorChannelId = '1158280943895846952'; // Ganti dengan ID channel tujuan

  const errorEmbed = new MessageEmbed()
    .setTitle('Error Log')
    .setDescription(`mimo bot system has an error, please check and fix it.<:Mimo_Sleep:1130495946288009246>\na-aduh mimo pusing nih.`)
    .addFields(
      { name: 'File Name', value: fileName },
      { name: 'Error Code', value: errorCode },
      { name: 'Error Message', value: `\`\`\`${error}\`\`\`` }
    )
    .setFooter({ text: new Date().toLocaleString() })
    .setThumbnail('https://imgur.com/DhxYopH.png');

  const errorChannel = client.channels.cache.get(errorChannelId);
  if (errorChannel) {
    errorChannel.send({ embeds: [errorEmbed] });
  } else {
    console.error('Error channel not found. Check if the provided channel ID is correct.');
  }
};
