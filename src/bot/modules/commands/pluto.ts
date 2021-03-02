// Pluto - src/bot/modules/commands/pluto.ts
// Written by Brendan Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { genEmbed } from '../utilities/EmbedGenerator'
import { Embed } from '../../../oob_modules/interfaces/Interfaces'
import { Message } from 'discord.js'
import config from '../../../configuration/config'

class PlutoCommand extends Command {
  constructor () {
    super('pluto', {
      aliases: [
        'pluto'
      ]
    })
  }

  exec (message: Message): any {
    const plutoEmbed: Embed = {
      title: ':new_moon: Pluto',
      description: 'This bot uses Pluto as a framework',
      fields: [
        {
          name: 'What is Pluto?',
          value: 'Pluto is a multifunctional discord bot that can also act as a framework for other bots.'
        },
        {
          name: 'How do I know it is not stealing my V-Bucks?',
          value: 'Simple! The entire project is [open source on GitHub](https://github.com/brndnln/Pluto). You can also click the text on the top of every embed!',
          inline: true
        },
        {
          name: 'Can I invite pluto into my own server?',
          value: 'Yes! [Click this to invite me!](https://discord.com/api/oauth2/authorize?client_id=753729496724799588&permissions=8&scope=bot)',
          inline: true
        }
      ],
      timestamp: true,
      footer: {
        text: `Generated by ${message.author.tag}`,
        image: message.author.displayAvatarURL({ dynamic: true })
      },
      author: {
        name: config.bot.personalization.embed.name,
        link: config.bot.personalization.embed.link,
        image: config.bot.personalization.embed.image
      }
    }

    return message.channel.send(genEmbed(plutoEmbed))
  }
}

export default PlutoCommand
