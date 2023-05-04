module.exports = function setupReplyMessage(client) {
    client.onMessage(async (message) => {
      if (message.body.toLowerCase() === 'hi') {
        try {
          await client.sendText(message.from, 'Hello!');
          console.log(`Sent "Hello!" to ${message.from}`);
        } catch (error) {
          console.error(`Error sending message to ${message.from}:`, error);
        }
      }
    });
  };
  