/* eslint-disable no-void */

// Pluto - bot/pluto.ts
// Written by Brendan Lane - https://brndnln.dev/

import { CustomClient } from './modules/client/Client.js'
import config from '../configuration/config.js'

const client = new CustomClient()

client.on('ready', () => {
  // @ts-expect-error
  console.log(`[${config.bot.personalization.botName}] Logged in as ${client.user.tag}`)
  // @ts-expect-error
  switch (client.user.bot) {
    case true:
      console.log(`[${config.bot.personalization.botName}] This user is a bot user!`)
      break
    case false:
      console.log(`[${config.bot.personalization.botName}] This user is not a bot user!`)
      break
    default:
      console.log(`[${config.bot.personalization.botName}] Could not tell weather this user was a bot user or not!`)
  }
})

void client.login(config.bot.token)
