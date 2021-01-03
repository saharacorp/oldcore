// Pluto - src/start.ts
// Written by Brendan Lane - https://brndnln.dev/

import { readFileSync } from 'fs'
import { getArrayPos } from '@brndnln/jst'
const args = process.argv.slice(2)
let argPos: number

const banners = [
  '3d-diagonal',
  'alpha',
  'big',
  'blocks'
]

if (args.includes('-h') || args.includes('--help')) {
  if (args.includes('--banner')) {
    argPos = getArrayPos('--banner', args)
    if (!banners.includes(args[argPos + 1])) {
      console.error('Error: that banner does not exist! Using random banner.\nList of banners:')
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

if (args.includes('-as') || args.includes('--use-admin-site')) {

}
