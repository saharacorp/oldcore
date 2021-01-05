// Pluto - src/oob_modules/web/server.ts
// Written by Brendan Lane - https://brndnln.dev/

import express from 'express'
import { log, loggerType } from '../cli/logger'
import ip from 'ip'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

export default function startServer (port: number): void {
  app.listen(port, () => {
    log(loggerType.OK, `Webserver started at https://localhost:${port}`)
    log(loggerType.EXTENSION, `Local IP: ${ip.address()}`)
  })
}
