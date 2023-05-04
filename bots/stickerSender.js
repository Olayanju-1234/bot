const fs = require('fs');
const path = require('path');

module.exports = function setupStickerBot(client) {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === 'sticker') {
      console.log(message.body.toLowerCase());
      try {
        const stickerPath = path.join(__dirname, 'stickers', 'hello.webp');
        const buffer = await fs.promises.readFile(stickerPath);
        const response = await client.sendImageAsSticker(message.from, buffer);
        console.log(`Sent sticker ${response.file}`);
      } catch (error) {
        console.error(`Error sending sticker to ${message.from}:`, error);
      }
    }
  });
};
