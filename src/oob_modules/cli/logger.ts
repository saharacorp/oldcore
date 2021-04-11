// PlutoCore - src/oob_modules/cli/logger.ts
// Written by Quinn Lane - https://brndnln.dev/

import { green, yellow, red, blue } from 'colors'

enum loggerType {
  OK,
  INFO,
  WARN,
  FAILED,
  EXTENSION,
  DEBUG
}

function log (type: loggerType, message: string): void {
  switch (type) {
    case loggerType.OK:
      console.log(`[  ${green('OK')}  ] ${message}`)
      break

    case loggerType.INFO:
      console.log(`[ INFO ] ${message}`)
      break

    case loggerType.WARN:
      console.log(`[ ${yellow('WARN')} ] ${message}`)
      break

    case loggerType.FAILED:
      console.log(`[${red('FAILED')}] ${message}`)
      break

    case loggerType.EXTENSION:
      console.log(`         -> ${message}`)
      break

    case loggerType.DEBUG:
      console.log(`[ ${blue('DBUG')} ] ${message}`)
      break

    default:
      throw new Error('Parameter type is not a loggerType!')
  }
}

export {
  loggerType,
  log
}
