// Pluto - src/oob_modules/types/Types.ts
// Written by Brendan Lane - https://brndnln.dev/

import { FileOptions, MessageAttachment } from 'discord.js'

type DiscordEmbedFile = FileOptions | string | MessageAttachment
type DiscordEmbedTime = Date | boolean | number
type DiscordUserStatus = 'online' | 'idle' | 'dnd' | 'invisible'
type DiscordUserPresence = 'playing' | 'streaming' | 'listening' | 'watching' | 'competing'

export {
  DiscordEmbedFile,
  DiscordEmbedTime,
  DiscordUserPresence,
  DiscordUserStatus
}
