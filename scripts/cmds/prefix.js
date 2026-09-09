const fonts = require("../func/fonts.js");

module.exports = {
  config: {
    name: "prefix",
    version: "1.2.0",
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
      `𝗦alut 🍃${userName} tu veux savoir ma vision ?\n` +
      `╭‣ 🌐 𝗚𝗅𝗈𝖻𝖺𝗅: ${currentPrefix}\n` +
      `╰‣ 💬 𝗖e 𝗖𝗁𝖺𝗍: ${currentPrefix}\n` +
      `🍃𝗝e suis ᏔᎯᏁᎠᎬᏒᎬᏒ\n` +
      `📂 𝗘ssayer "${currentPrefix}𝗁𝖾𝗅𝗉" pour voir toutes les commandes.`;
    
    return api.sendMessage(
      {
        body: message,
        mentions: [{
          tag: userName,
          id: senderID
        }]
      },
      threadID,
      messageID
    );
  }
}
  ;
