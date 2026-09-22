// 👑 OWNER ID
const OWNER_ID = "61569864792265";

// État global du bot (en mémoire)
if (global.isBotDisabled === undefined) {
  global.isBotDisabled = false;
}

// 💖 FONT SAFE
function font(text) {
  const map = {
    a:"𝖺", b:"𝖻", c:"𝖼", d:"𝖽", e:"𝖾",
    f:"𝖿", g:"𝗀", h:"𝗁", i:"𝗂", j:"𝗃",
    k:"𝗄", l:"𝗅", m:"𝗆", n:"𝗇", o:"𝗈",
    p:"𝗉", q:"𝗊", r:"𝗋", s:"𝗌", t:"𝗍",
    u:"𝗎", v:"𝗏", w:"𝗐", x:"𝗑", y:"𝗒",
    z:"𝗓"
  };
  return String(text)
    .split("")
    .map(c => map[c.toLowerCase()] || c)
    .join("");
}

module.exports = {
  config: {
    name: 'Daemon',
    aliases: ['state'],
    version: '1.0',
    author: 'Shade',
    role: 2,
    category: 'system',
    shortDescription: {
      en: 'Active ou désactive les réponses du bot'
    },
    guide: {
      en: '•Daemon off (pour désactiver) / •Daemon on (pour réactiver)'
    }
  },

  onStart: async function ({ api, event, args, message }) {
    const userId = event.senderID;

    if (userId !== OWNER_ID) {
      return message.reply(`𝗗𝗮𝗲𝗺𝗼𝗻\n━━━━━━━━━\n\n${font("Flemme de répondre ! ")}`);
    }

    const state = args[0]?.toLowerCase();

    if (state === 'off') {
      global.isBotDisabled = true;
      api.setMessageReaction("⏸️", event.messageID, () => {}, true);
      return message.reply(`𝗗𝗮𝗲𝗺𝗼𝗻\n━━━━━━━━━\n\n${font("Désactivation du projet Daemon ! ⏸️")}`);
    } 
    
    if (state === 'on') {
      global.isBotDisabled = false;
      api.setMessageReaction("▶️", event.messageID, () => {}, true);
      return message.reply(`𝗗𝗮𝗲𝗺𝗼𝗻\n━━━━━━━━━\n\n${font("Activation du projet Daemon ! ▶️✨")}`);
    }

    return message.reply(`𝗗𝗮𝗲𝗺𝗼𝗻\n━━━━━━━━━\n\n${font("Utilisation : Daepon off pour désactiver ou Daemon on pour réactiver.")}`);
    
  }
};
