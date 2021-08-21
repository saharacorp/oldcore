// PlutoCore - src/oob_modules/types/Types.ts
// Written by Sam - https://quinnlane.dev/

import { FileOptions, MessageAttachment } from 'discord.js'

type DiscordEmbedFile = FileOptions | string | MessageAttachment
type DiscordEmbedTime = Date | boolean | number

export {
  DiscordEmbedFile,
  DiscordEmbedTime
}
