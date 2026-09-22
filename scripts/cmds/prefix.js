const fonts = require("../func/fonts.js");const axios = require("axios");

module.exports = {
  config: {
    name: "prefix",
    version: "1.3.0",
    author: "Shade × Gemini",
    countDown: 3,
    role: 0,
    shortDescription: { fr: "Affiche le préfixe du bot" },
    category: "settings",
    guide: { fr: "prefix" }
  },
  onStart: async function ({ api, event, usersData }) {
    const { threadID, messageID, senderID } = event;
    const currentPrefix = global.GoatBot?.config?.prefix || ".";
    
    let userName = "Utilisateur";
    try {
      userName = await usersData.getName(senderID) || "Utilisateur";
    } catch (e) {}
    
    const message = 
      `𝗘chanté ${userName} tu veux savoir ma vision ?\n` +
      `╭‣ 🌐 𝗚𝗅𝗈𝖻𝖺𝗅: ${currentPrefix}\n` +
      `╰‣ 💬 𝗖e 𝗖𝗁𝖺𝗍: ${currentPrefix}\n` +
      `🍃 I'm ᎠᎯᎬᎷᎾᏁ\n` +
      `📂 𝗘ssayer "${currentPrefix}𝗁𝖾𝗅𝗉" pour voir toutes les commandes.`;

    // URLs des images à joindre
    const imgUrls = [
      "https://i.imgur.com/zecPsPU.jpeg",
      "https://i.imgur.com/QOjUcq8.jpeg"
    ];

    const attachments = [];
    
    // Téléchargement des images sous forme de flux (stream)
    for (const url of imgUrls) {
      try {
        const response = await axios.get(url, { responseType: "stream" });
        attachments.push(response.data);
      } catch (err) {
        console.error("Erreur lors du chargement de l'image :", err);
      }
    }
    
    return api.sendMessage(
      {
        body: message,
        attachment: attachments,
        mentions: [{
          tag: userName,
          id: senderID
        }]
      },
      threadID,
      messageID
    );
  }
};
