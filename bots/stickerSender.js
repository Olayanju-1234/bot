// Import Venom Bot
const { create } = require('venom-bot');

// Define the stickerbot function
async function stickerbot() {
  try {
    // Create a new Venom Bot session
    const client = await create({
      session: 'stickerbot',
      logQR: true
    });

    // Listen for incoming messages
    client.onMessage(async (message) => {
      // Check if the message is a sticker request
      if (message.body.startsWith('/sticker ')) {
        try {
          // Get the text after the '/sticker ' command
          const text = message.body.slice(9);
          // Generate the sticker using Venom Bot
          const sticker = await client.sendImageAsSticker(message.from, text);
          // Send the sticker to the user
          await client.sendStickerAsReply(message.from, sticker);
        } catch (error) {
          console.log(error);
          await client.sendText(message.from, 'Failed to generate sticker.');
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// Export the stickerbot function
module.exports = stickerbot;
