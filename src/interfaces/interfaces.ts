// Kerberos - src/interfaces/interfaces.ts
// Written by Quinn Lane - https://quinnlane.dev/

import { DiscordID } from '../types/types'

interface Configuration {
  version: string
  token: string
  ownerid: DiscordID
  authors: DiscordID

}

export {
  Configuration
}