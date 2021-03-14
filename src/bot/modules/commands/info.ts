// Pluto - src/bot/modules/commands/info.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import {genEmbed} from "../utilities/EmbedGenerator";
import config from "../../../configuration/config";

class InfoCommand extends Command{
	constructor() {
		super('info', {
			aliases: [
				'info'
			],
			category: 'Meta',
			description: {
				content: 'Gets basic info about the bot',
				usage: 'info'
			}
		});
	}

	async exec (message: Message) {
		return await message.channel.send(genEmbed({
			title: ':information: Bot Info',
			description: `${config.bot.personalization.botName} is made by <@${config.bot.ownerid}>`
		}))
	}
}
