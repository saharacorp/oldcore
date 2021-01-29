// Pluto - src/oob_modules/cli/shell/command.ts
// Written by Brendan Lane - https://brndnln.dev/

import { CliCommand } from '../../interfaces/Interfaces'

enum CommandCategory {
  ADMIN
}

class Command {
  commandObject: object
  config: CliCommand

  constructor (commandObject: object, config: CliCommand) {
    this.commandObject = commandObject
    this.config = config
  }
}

export {
  Command,
  CommandCategory
}
