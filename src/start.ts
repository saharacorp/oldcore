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
    console.log(argPos + 1)
  }
}
