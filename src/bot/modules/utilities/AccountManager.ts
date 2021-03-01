// Pluto - src/bot/modules/utilities/AccountManager.ts
// Written by Brendan Lane - https://brndnln.dev/

import { client as PlutoClient } from '../../pluto'
import { CustomClient } from '../client/Client'
import {DiscordUserPresence, DiscordUserStatus} from "../../../oob_modules/types/Types";
import {BufferResolvable, Base64Resolvable} from 'discord.js'

export default class AccountManager {
  private readonly client: CustomClient

  constructor (client?: CustomClient) {
    if (client === undefined) {
      this.client = PlutoClient
    } else {
      this.client = client
    }
  }

  presence(type: DiscordUserPresence, text: string, url?: string) {
		if (type === 'streaming' && url === undefined) throw new Error('A streaming presence needs a URL!')
		// @ts-ignore
		this.client.user.setActivity(text, { type: type.toUpperCase() })
	}

	status(status: DiscordUserStatus) {
  	// @ts-ignore
		this.client.user.setStatus(status)
	}

	avatar(avatar: BufferResolvable | Base64Resolvable) {

	}
}
