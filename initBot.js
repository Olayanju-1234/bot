const venom = require('venom-bot');

module.exports = async function getClient() {
  try {
    const client = await venom.create();
    console.log('Client initialized!');
    return client;
  } catch (error) {
    console.error('Error initializing client:', error);
    throw error;
  }
};
