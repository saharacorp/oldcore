// PlutoCore - src/configuration/config.ts
// Written by Sam - https://quinnlane.dev/

import { Configuration } from '../oob_modules/interfaces/Interfaces'

const config: Configuration = {
  // Bot version
  version: '1.3.8',
  // Bot Configuration
  bot: {
    // Prefix
    prefix: '.',
    // Owner ID
    ownerid: '',
    // Authors
    authors: '',
    // Bot tokens
    token: '',
    canaryToken: '',
    // Bot Personalization
    personalization: {
      // The name of the discord bot
      botName: 'PlutoCore',
      // Show detailed error messages (documentation and syntax, error stacks, etc.)
      detailedErrorMessages: true,
      // Social preview image (gets embedded on .info)
      socialPreviewImage: 'https://media.discordapp.net/attachments/646131035272249344/831048144903995412/plutocorebanner.png',
      // Embed data
      embed: {
      	// Default discord data
        name: 'PlutoCore',
        image: 'https://media.discordapp.net/attachments/800944984500600855/803110348852953108/download_31.jpg?width=666&height=666',
        link: 'https://github.com/quinndoescode/PlutoCore',
        // Default color profiles
        defaultColors: {
          normal: '#202122',
          error: '#ca0f0f',
          success: '#4ff748',
          invisible: '#2F3136',
          lightInvisible: '#F2F3F5'
        }
      },
      // Presence data on bot startup
      presenceData: {
        activity: {
          type: 'LISTENING',
          name: 'the screams of the void'
        },
        status: 'online'
      }
    },
    commands: {
    	msgreact: {
    		emote: '👋',
        enabled: false,
        target: '753729496724799588'
      }
    }
  },
  // Development Options (do not touch unless you know what you are doing)
  devOptions: {
    canary: false
  }
}

export default config
