// Import Venom Bot
const { create } = require('venom-bot');

// Define the replymessage function
async function replymessage() {
  try {
    // Create a new Venom Bot session
    const client = await create({
      session: 'replymessage',
      logQR: true
    });

    // Define the reply message
    const replyMessage = 'Hello! Thank you for messaging me.';

    // Listen for incoming messages
    client.onMessage(async (message) => {
      // Reply with the predefined message
      await client.sendText(message.from, replyMessage);
    });
  } catch (error) {
    console.log(error);
  }
}

// Export the replymessage function
module.exports = replymessage;
