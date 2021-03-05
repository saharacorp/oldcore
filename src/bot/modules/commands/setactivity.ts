// Pluto - src/bot/modules/commands/setactivity.ts
// Written by Brendan Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { client } from '../../pluto'
import { genEmbed } from '../utilities/EmbedGenerator'
import { readFileSync } from 'fs'
import config from '../../../configuration/config'

const types = [
  'playing',
  'streaming',
  'watching',
  'listening',
  'competing'
]

class SetActivityCommand extends Command {
  constructor () {
    super('setactivity', {
      ownerOnly: false,
      args: [
        {
          id: 'type',
          type: 'string'
        },
        {
          id: 'text',
          type: 'string'
        },
        {
          id: 'url',
          type: 'string'
        }
      ]
    })
  }

  exec (message, args): any {
    if (args.type === undefined || args.text === undefined) {
      if (config.bot.personalization.showDocsInError) {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'This command requires 2 arguments!',
          color: config.bot.personalization.embed.defaultColors.error,
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'This command requires 2 arguments!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            }
          ]
        }))
      }
    } else if (types.includes(args.type)) {
      if (config.bot.personalization.showDocsInError) {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'The type you have specified is not a valid type you can use!',
          color: config.bot.personalization.embed.defaultColors.error,
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'The type you have specified is not a valid type you can use!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            }
          ]
        }))
      }
    } else if (args.type === 'streaming' && args.url === undefined) {
      if (config.bot.personalization.showDocsInError) {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'You must specify a URL for the stream!',
          color: config.bot.personalization.embed.defaultColors.error,
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            },
            {
              name: 'Documentation',
              value: `\`\`\`${readFileSync('./messages/documentation/setActivityCommand.txt', { encoding: 'utf-8' })}\`\`\``
            }
          ]
        }))
      } else {
        message.channel.send(genEmbed({
          title: ':x: Error',
          description: 'You must specify a URL for the stream!',
          color: config.bot.personalization.embed.defaultColors.error,
          author: {
            name: config.bot.personalization.embed.name,
            image: config.bot.personalization.embed.image,
            link: config.bot.personalization.embed.link
          },
          footer: {
            text: `Generated by ${message.author.tag}`,
            image: message.author.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: 'Syntax',
              value: `\`${config.bot.prefix}setactivity <type> <text> [url]\``
            }
          ]
        }))
      }
    } else {
    	// @ts-expect-error
      client.user.setActivity(args.text, { type: args.type.toUpperCase(), url: args.url })
    }
  }
}

export default SetActivityCommand