<<<<<<< HEAD
// PlutoCore - src/bot/modules/utilities/ShutdownHandler.ts
// Written by Sam - https://quinnlane.dev/

import { log, loggerType } from '../../../oob_modules/cli/logger'

export default function shutdownHandler (code: number) {
  log(loggerType.INFO, 'Bot shutting down... Please wait...')
  log(loggerType.OK, 'Bot shutdown complete. Goodbye.')
  process.exit(code)
}
=======
// PlutoCore - src/bot/modules/utilities/ShutdownHandler.ts
// Written by Quinn Lane - https://brndnln.dev/

import { log, loggerType } from '../../../oob_modules/cli/logger'

export default function shutdownHandler (code: number) {
  log(loggerType.INFO, 'Bot shutting down... Please wait...')
  log(loggerType.OK, 'Bot shutdown complete. Goodbye.')
  process.exit(code)
}
>>>>>>> development
