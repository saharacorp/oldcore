// PlutoCore - src/start.ts
// Written by Sam - https://quinnlane.dev/

import { log, loggerType } from './oob_modules/cli/logger'
import Pluto from './bot/pluto'

import { Command, Option } from 'commander'
import config from './configuration/config'
import { getArrayPos, rainbow } from './oob_modules/misc/jst'
import { readFileSync } from 'fs'

export const pjson = JSON.parse(readFileSync(`${__dirname}/../../package.json`, { encoding: 'utf-8' }))

const args = process.argv.slice(2)
let bannerPos: number

const banners = [
  '3d-diagonal',
  'acrobatic',
  'alpha',
  'ansi-shadow',
  'arrows',
  'big',
  'bigmoney',
  'blocks',
  'bolger',
  'broadway',
  'cards',
  'chiseled',
  'crazy',
  'doh',
  'doom',
  'fire',
  'graffiti',
  'impossible',
  'isometric',
  'modular',
  'ogre',
  'patorjk',
  'slant',
  'slant-relief',
  'train',
  'twisted'
]

const program = new Command()

const debug = new Option('-d, --debug', 'Shows JSON of all arguments passed as a debug measure')
  .hideHelp()
  .default(false)

const banner = new Option('--banner <banner>', 'Forces a custom banner to be used')
  .default('random')
  .choices([
    'random',
    ...banners
  ])

const showBanners = new Option('--show-banners', 'Shows all the banners that can be used and then closes the process')
  .default(false)

const rainbowArg = new Option('--rainbow, --gaytime', 'Makes the text gay (it turns the text rainbow)')
  .hideHelp()
  .default(false)

const noStart = new Option('--no-start', 'Process will be killed before bot has chance to start')
  .default(true)

program
  .version(`PlutoCore version ${config.version}`, '-v, --version', 'Shows the version of PlutoCore')
  .addOption(debug)
  .addOption(banner)
  .addOption(showBanners)
  .addOption(rainbowArg)
  .addOption(noStart)
  .parse(process.argv)

const options = program.opts()

if (options.debug) console.log(options)
if (options.showBanners) {
  console.log(readFileSync(`${__dirname}/../../messages/title.txt`, { encoding: 'utf-8' }))
  console.log('\n       List of all possible banners:\n')
  banners.forEach(value => {
    bannerPos = getArrayPos(value, banners) + 1
    console.log(`       [${bannerPos.toString()} of ${banners.length}] ${value}:`)
    if (options.gaytime) {
      rainbow(readFileSync(`${__dirname}/../../messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    } else {
      console.log(readFileSync(`${__dirname}/../../messages/banners/${value}.txt`, { encoding: 'utf-8' }))
    }
  })
  process.exit(0)
}
if (options.banner !== 'random') {
  if (options.gaytime) {
    rainbow(`\n${readFileSync(`${__dirname}/../../messages/banners/${options.banner}.txt`, { encoding: 'utf-8' })}`)
    rainbow(readFileSync(`${__dirname}/../../messages/title.txt`, { encoding: 'utf-8' }))
  } else {
    console.log(`\n${readFileSync(`${__dirname}/../../messages/banners/${options.banner}.txt`, { encoding: 'utf-8' })}`)
    console.log(readFileSync(`${__dirname}/../../messages/title.txt`, { encoding: 'utf-8' }))
  }
} else {
  if (options.gaytime) {
    rainbow(`\n${readFileSync(`${__dirname}/../../messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    rainbow(readFileSync(`${__dirname}/../../messages/title.txt`, { encoding: 'utf-8' }))
  } else {
    console.log(`\n${readFileSync(`${__dirname}/../../messages/banners/${banners[Math.floor(Math.random() * banners.length)]}.txt`, { encoding: 'utf-8' })}`)
    console.log(readFileSync(`${__dirname}/../../messages/title.txt`, { encoding: 'utf-8' }))
  }
}
if (!options.start) process.exit(0)
Pluto()
