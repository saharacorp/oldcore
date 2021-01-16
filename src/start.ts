// Pluto - src/start.ts
// Written by Brendan Lane - https://brndnln.dev/

import { readFileSync } from 'fs'
import { getArrayPos, rainbow } from '@brndnln/jst'

import config from './configuration/config'
import webServer from './oob_modules/web/server'
import { log, loggerType } from './oob_modules/cli/logger'
import Pluto from './bot/pluto'

const args = process.argv.slice(2)
let argPos: number
let bannerPos: number

const banners = [
  '3d-diagonal',
  'alpha',
  'ansi-shadow',
  'big',
  'blocks',
  'doh',
  'doom',
  'graffiti',
  'impossible',
  'isometric',
  'modular',
  'ogre',
  'slant',
  'slant-relief',
  'train'
]

if (args.includes('--show-banners')) {
  console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
  console.log('\n       List of all possible banners:\n')
  banners.forEach(value => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    bannerPos = getArrayPos(value, banners) + 1
    console.log(`       [${bannerPos.toString()} of ${banners.length}] ${value}:`)
    if (args.includes('--rainbow')) {
      rainbow(readFileSync(`./messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    } else {
      console.log(readFileSync(`./messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    }
  })
  process.exit(0)
}

if (args.includes('--banner')) {
  argPos = getArrayPos('--banner', args)
  if (!banners.includes(args[argPos + 1])) {
    console.error('Error: That banner does not exist! To find a banner that does exist, use the --show-banners flag. Using random banner.\nList of banners:')
    banners.forEach(value => {
      console.log(` - ${value}`)
    })
    // noinspection DuplicatedCode
    if (args.includes('--rainbow')) {
      rainbow(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
      rainbow('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
    } else {
      console.log(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
      console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
    }
  } else {
    // noinspection DuplicatedCode
    if (args.includes('--rainbow')) {
      rainbow(`\n${readFileSync(`./messages/banners/${args[argPos + 1]}.txt`, { encoding: 'utf-8' })}`)
      rainbow('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
    } else {
      console.log(`\n${readFileSync(`./messages/banners/${args[argPos + 1]}.txt`, { encoding: 'utf-8' })}`)
      console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
    }
  }
} else {
  // noinspection DuplicatedCode
  if (args.includes('--rainbow')) {
    rainbow(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    rainbow('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
  } else {
    console.log(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/\n')
  }
}

if (args.includes('-h') || args.includes('--help')) {
  console.log(readFileSync('./messages/help.txt', { encoding: 'utf-8' }))
  process.exit(0)
}

if (args.includes('-s') || args.includes('--use-admin-site')) {
  log(loggerType.INFO, 'Starting webserver...')
  webServer(config.adminSite.port)
}

if (!args.includes('--no-start')) {
  log(loggerType.INFO, 'Starting bot... Please wait...')
  Pluto()
}
