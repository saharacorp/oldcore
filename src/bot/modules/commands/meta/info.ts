// PlutoCore - src/bot/modules/commands/info.ts
// Written by Quinn Lane - https://brndnln.dev/

import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { genEmbed } from '../../utilities/EmbedGenerator'
import config from '../../../../configuration/config'
import { client } from '../../../pluto'
import { pjson } from '../../../../start'
import { datFormat } from '../../../../oob_modules/misc/jst'

export default class InfoCommand extends Command {
  constructor () {
    super('info', {
      aliases: [
        'info'
      ],
      category: 'Meta',
      description: {
        content: 'Gets basic info about the bot',
        usage: 'info'
      }
    })
  }

  async exec (message: Message) {
  	const discordJsVersion = pjson.dependencies['discord.js'].split('^')[1]
    const discordAkairoVersion = pjson.dependencies['discord-akairo'].split('^')[1]

    const info = genEmbed({
      title: ':information_source: Bot Info',
      footer: {
        text: `Generated by ${message.author.tag}`,
        image: message.author.displayAvatarURL({ dynamic: true })
      },
      author: {
        name: config.bot.personalization.embed.name,
        link: config.bot.personalization.embed.link,
        image: config.bot.personalization.embed.image
      },
      timestamp: true,
      color: config.bot.personalization.embed.defaultColors.normal,
      image: config.bot.personalization.socialPreviewImage,
      fields: [
        {
          name: 'Bot Version',
          value: config.bot.personalization.botName === 'PlutoCore' ? `PlutoCore version ${config.version}` : `${config.bot.personalization.botName} version ${config.version}\nPlutoCore version ${config.version}`,
          inline: true
        },
        {
          name: 'Bot Modules',
          value: `${client.commandHandler.modules.array().length} total command(s)\n${client.inhibitorHandler.modules.array().length} total inhibitor(s)\n${client.listenerHandler.modules.array().length} total listener(s)`,
          inline: true
        },
        {
          name: 'Discord.js Version',
          value: `v${discordJsVersion} - [Find here](https://npmjs.com/package/discord.js/v/${discordJsVersion})`,
          inline: true
        },
        {
          name: 'Discord Akairo Version',
          value: `v${discordAkairoVersion} - [Find here](https://npmjs.com/package/discord-akairo/v/${discordAkairoVersion})`,
          inline: true
        },
        {
          name: 'Uptime',
          value: datFormat(process.uptime()),
          inline: true
        },
        {
          name: 'Guild Count',
          value: client.guilds.cache.array().length === 1 ? `I am in ${client.guilds.cache.array().length} guild` : `I am in ${client.guilds.cache.array().length} guilds`,
          inline: true
        }
      ]
    })

    if (Array.isArray(config.bot.authors)) {
      switch (config.bot.authors.length) {
        case 1:
          info.setDescription(`${config.bot.personalization.botName} is created by <@${config.bot.authors[0]}>`)
          break

        case 2:
          info.setDescription(`${config.bot.personalization.botName} is created by <@${config.bot.authors[0]}> and <@${config.bot.authors[1]}>`)
          break

        default:
          let newAuthorArray: Array<string | number> = []
          config.bot.authors.forEach((v) => {
          	if (typeof v === 'number') {
              newAuthorArray = [...newAuthorArray, `<@${v.toString()}>`]
            } else {
              newAuthorArray = [...newAuthorArray, `${v}`]
            }
          })

          let authorString = ''
          newAuthorArray.forEach((v) => {
            if (newAuthorArray.indexOf(v) === newAuthorArray.length - 1) {
              authorString = `${authorString}, and ${v}`
            } else if (newAuthorArray.indexOf(v) === 0) {
              authorString = `${v}`
            } else {
              authorString = `${authorString}, ${v}`
            }
          })

          info.setDescription(`${config.bot.personalization.botName} is created by ${authorString}`)
          break
      }
    } else {
    	if (config.bot.authors === '' || config.bot.authors === undefined || config.bot.authors === null) {
        info.setDescription(`${config.bot.personalization.botName} is created by no one, apparently. The bot owner forgot to populate the author ID field (\`config.bot.authorid\`).`)
      } else {
        info.setDescription(`${config.bot.personalization.botName} is created by <@${config.bot.authors}>`)
      }
    }

    return await message.channel.send(info)
  }
}
