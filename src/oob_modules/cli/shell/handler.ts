// Pluto - src/oob_modules/cli/shell/handler.ts
// Written by Brendan Lane - https://brndnln.dev/

import { prompt } from 'enquirer'
import config from '../../../configuration/config'

export default async function shellHandler () {
  const command = await prompt({
    type: 'input',
    name: 'commandInput',
    message: config.cli.prompt
  })

  console.log(command)
}
