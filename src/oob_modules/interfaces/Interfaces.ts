// PlutoCore - src/oob_modules/interfaces/Interfaces.ts
// Written by Quinn Lane - https://brndnln.dev/

import { StringResolvable, ColorResolvable, EmbedFieldData, PresenceStatusData } from 'discord.js'
import { DiscordEmbedFile, DiscordEmbedTime } from '../types/Types'

interface Configuration {
  version: string
  bot: {
  	prefix: string
    ownerid: string | string[]
    authorid: string | number | Array<string | number> | undefined | null
    token: string
    canaryToken: string | undefined
    personalization: {
  		botName: string
      detailedErrorMessages: boolean
      socialPreviewImage: string | undefined
      embed: {
  			name: string | undefined
        image: string | undefined
        link: string | undefined
        defaultColors: {
  				normal: string
          error: string
          success: string
          invisible: string
          lightInvisible: string
        }
      }
      presenceData: {
  			activity: {
  				type: string
          name: string
        }
        status: PresenceStatusData
      }
    }
    commands: {
  		msgreact: {
  			emote: string
        enabled: boolean
        target: string
      }
    }
  }
  devOptions: {
  	canary: boolean
  }
}

interface Embed {
  title: StringResolvable
  description?: StringResolvable
  color?: ColorResolvable
  author?: {
    name: StringResolvable
    link?: string
    image?: string
  }
  footer?: {
    text: StringResolvable
    image?: string
  }
  thumbnail?: string
  image?: string
  url?: string
  files?: DiscordEmbedFile[]
  timestamp?: DiscordEmbedTime
  fields?: EmbedFieldData[]
}

interface CliCommand {
  command: string
  description: string
  aliases: string[]
}

export {
  Configuration,
  Embed,
  CliCommand
}
