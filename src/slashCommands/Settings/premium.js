const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const db1 = require("../../schema/station.js");
const db2 = require('../../schema/mode.js');
module.exports = {
  name: "premium",
  description: "Shows information about DJ Mimo premium",
  userPrams: ['MANAGE_GUILD'],
  botPrams: ['EMBED_LINKS'],
  /**
      * @param {Client} client
      * @param {CommandInteraction} interaction
      */

  run: async (client, interaction, prefix) => {
    await interaction.deferReply({
    });

const ress = await db1.findOne({ Guild: interaction.guildId });
    if (ress && ress.Radio) station = ress.Radio;

const res = await db2.findOne({ Guild: interaction.guildId });
    if (res && res.mode) mode = res.mode;
    
const np = new MessageEmbed()
  .setAuthor({ name: `${client.user.username} Premium`, iconURL: client.user.displayAvatarURL(), url: `https://discord.gg/MwV9tm6RPX` })
                    .setDescription(`
**<:heart:1121845314341581022> Premium perks:
<:notes:1119915814733217843> 24/7 Music Playback.
:sound: Volume controls.
<:radio:1119915830344437790> Multiple radio stations/themes.
<:floppy_disk:1119915780931338280> Create custom radio stations using your playlists.
<:dvd:1119915776732827778> Higher quality audio.
Set up server DJ roles.
<:timer:1121732448670199879> Lower commands cooldown.
:sparkles: Early access to DJ Mimo's new features.
:money_with_wings:  Priority support.
How to get premium?
:sparkles: By becoming a member on our Patreon page.**`)


      .setColor(client.embedColor);


interaction.followUp({
  embeds: [np]
})

    
  }
}
