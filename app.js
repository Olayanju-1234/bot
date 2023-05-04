const getClient = require('./initBot');
const setupReplyMessage = require('./bots/replyMessages');
const setupStickerBot = require('./bots/stickerSender');

async function start() {
  const client = await getClient();

  setupReplyMessage(client);
  setupStickerBot(client);
}

start().catch((error) => console.error('Error starting bot:', error));
