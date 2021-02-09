// Pluto - src/oob_modules/cli/shell/handler.ts
// Written by Brendan Lane - https://brndnln.dev/

import { createInterface } from 'readline'
import { readFileSync } from 'fs'
import config from '../../../configuration/config'
import { log, loggerType } from '../logger'

export default async function shellHandler () {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(config.cli.prompt, (command: string) => {
    switch (command) {
      case 'close':
        log(loggerType.INFO, 'Closing CLI prompt...')
        rl.close()
				break

			case 'help':
				console.log(readFileSync('./messages/cliHelp.txt', { encoding: "utf-8" }))
				break
    }
  })

	rl.on("close", () => {
		log(loggerType.OK, 'CLI prompt closed')
	})
}
