'use strict'
// Pluto - bot/pluto.ts
// Written by Brendan Lane - https://brndnln.dev/
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const Client_js_1 = require('./modules/client/Client.js')
const config_js_1 = __importDefault(require('./config.js'))
const client = new Client_js_1.CustomClient()
client.on('ready', () => {
  console.log(`[${config_js_1.default.personalization.botName}] Logged in as ${client.user.tag}`)
  switch (client.user.bot) {
    case true:
      console.log(`[${config_js_1.default.personalization.botName}] This user is a bot user!`)
      break
    case false:
      console.log(`[${config_js_1.default.personalization.botName}] This user is not a bot user!`)
      break
    default:
      console.log(`[${config_js_1.default.personalization.botName}] Could not tell weather this user was a bot user or not!`)
  }
})
client.login(config_js_1.default.token)
// # sourceMappingURL=pluto.js.map
