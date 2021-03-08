// Pluto - src/configuration/config.ts
// Written by Brendan Lane - https://brndnln.dev/

import { bold, red, gray } from 'colors'

export default {
  // CLI Configuration
  cli: {
    version: '1.3.8',
    prompt: `${bold(`${red('(local)')} ${gray('$ » ')}`)}`
  },
  // Bot Configuration
  bot: {
    // Prefix
    prefix: '.',
    // Owner ID
    ownerid: '',
    // Bot tokens
    token: '',
    canaryToken: '',
    // Bot Personalization
    personalization: {
    	// The name of the discord bot
      botName: 'Pluto',
      // Show detailed error messages (documentation and syntax, error stacks, etc.)
      detailedErrorMessages: true,
      // Embed data
      embed: {
      	// Default discord data
        name: 'Pluto',
        image: 'https://media.discordapp.net/attachments/800944984500600855/803110348852953108/download_31.jpg?width=666&height=666',
        link: 'https://github.com/brndnln/Pluto',
        // Default color profiles
        defaultColors: {
          normal: '#202122',
          error: '#ca0f0f',
          success: '#4ff748'
        }
      },
      // Presence data on bot startup
      presenceData: {
        activity: {
          type: 'COMPETING',
          name: 'the olympic games | .help'
        },
        status: 'online'
      }
    }
  },
  // Administration Site Options
  adminSite: {
    // Port for website
    port: 8000,
    // Authentication
    username: 'admin',
    password: 'admin'
  },
  // Development Options (do not touch unless you know what you are doing)
  devOptions: {
    debugBuild: false,
    canary: false,
    cliEnable: false
  }
}
