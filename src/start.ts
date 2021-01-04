// Pluto - src/start.ts
// Written by Brendan Lane - https://brndnln.dev/

import { readFileSync } from 'fs'
import { getArrayPos } from '@brndnln/jst'
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

if (args.includes('-h') || args.includes('--help')) {
  if (args.includes('--banner')) {
    argPos = getArrayPos('--banner', args)
    if (!banners.includes(args[argPos + 1])) {
      console.error('Error: That banner does not exist! To find a banner that does exist, use the --show-banners flag. Using random banner.\nList of banners:')
      banners.forEach(value => {
        console.log(` - ${value}`)
      })
      console.log(`\n${readFileSync(`./messages/banners/${banners[Math.floor(Math.random()) * banners.length]}.txt`, { encoding: 'utf-8' })}`)
    } else {
      console.log(readFileSync(`./messages/banners/${args[argPos + 1]}.txt`, { encoding: 'utf-8' }))
    }
  } else {
    console.log(readFileSync(`./messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' }))
  }
  console.log(readFileSync('./messages/help.txt', { encoding: 'utf-8' }))
  process.exit(0)
}

if (args.includes('--show-banners')) {
  console.log('\n                           THE PLUTO DISCORD BOT\n       Written by Brendan Lane - https://brndnln.dev/ https://pluto.rip/')
  console.log('\n\n       List of all possible banners:\n')
  banners.forEach(value => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    bannerPos = getArrayPos(value, banners) + 1
    console.log(`       [${bannerPos.toString()} of ${banners.length}] ${value}:`)
    console.log(readFileSync(`./messages/banners/${value}.txt`, { encoding: 'utf-8' }))
  })
}

if (args.includes('-as') || args.includes('--use-admin-site')) {

}
