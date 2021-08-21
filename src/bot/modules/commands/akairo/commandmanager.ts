// PlutoCore - src/bot/modules/commands/akairo/commandmanager.ts
// Written by Sam - https://quinnlane.dev/

import { Command } from 'discord-akairo'

export default class CommandManagerCommand extends Command {
  constructor () {
    super('commandmanager', {
      aliases: [
        'commandmanager'
      ],
      category: 'Akairo',
      description: {
        content: 'Direct access to the command handler in discord akairo',
        usage: 'commandmanager',
        examples: [
          'commandmanager'
        ]
      }
    })
  }
}
