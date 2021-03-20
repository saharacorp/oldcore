// Pluto - src/bot/modules/commands/msgreact.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { genEmbed } from '../utilities/EmbedGenerator'
import config from '../../../configuration/config'

export default class MessageReactCommand extends Command {
  constructor () {
    super('msgreact', {
      aliases: [
      	'msgreact',
        'react'
      ],
      ownerOnly: true,
      category: 'Reactions',
      description: {
        content: 'Manage automatic message reactions',
        usage: 'msgreact <subcommand> [args]',
        examples: [
          'msgreact status',
          'msgreact setemote :crab:',
          'msgreact settarget <@753729496724799588>'
        ]
      },
      args: [
        {
          id: 'subcommand',
          type: 'string',
          default: 'help'
        },
        {
          id: 'value',
          type: 'string',
          default: null
        }
      ]
    })
  }

  async exec (message: Message) {

  }
}
