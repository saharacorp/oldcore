// Kerberos - src/main.ts
// Written by Quinn Lane - https://quinnlane.dev/

import { Client, Intents } from 'discord.js'
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  client.application?.commands.set([])
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('Nzc1MjM1MjE0MDgzMDk2NjI2.X6jYDg.uRP_iYT0sgl5c4QoHdZGecxkmls');
