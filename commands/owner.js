/*
Made by notasifofficial
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "Hasai Sasaki",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://www.youtube.com/@GW__Maruf';
      const InstagramLink = 'https://www.instagram.com/sasaki_asif/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Hasai Sasaki',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157310253520662638/2443-iconperson.png?ex=651824aa&is=6516d32a&hm=0becc4a0fda01e5a02a63cf098db30c287e60a474f8d2da4ddeae7f47d98a5a3&',
          url: 'https://discord.gg/uHCVTQkSwN'
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself Hasai Sasaki or Asif Sheikh. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram and Discord than other social media. Feel free to contact me!\n YouTube : ❤️ [GW__Maruf](${youtubeLink})\n Instagram : 💙 [Hasai_Sasaki](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*
Made by notasifofficial
*/
