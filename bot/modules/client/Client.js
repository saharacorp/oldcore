'use strict'
// Pluto - bot/modules/client/Client.ts
// Written by Brendan Lane - https://brndnln.dev/
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.CustomClient = void 0
const discord_akairo_1 = require('discord-akairo')
const config_js_1 = __importDefault(require('./../../config.js'))
class CustomClient extends discord_akairo_1.AkairoClient {
  constructor () {
    // Setup custom client
    super({
      // Options for Akairo
      ownerID: config_js_1.default.ownerid
    }, {
      // Options for Discord
      disableMentions: 'everyone'
    })
    // Command Handler
    this.commandHandler = new discord_akairo_1.CommandHandler(this, {
      directory: './bot/modules/commands/',
      extensions: [
        '.js'
      ],
      prefix: config_js_1.default.prefix,
      allowMention: true
    })
    this.commandHandler.loadAll()
    // Inhibitor Handler
    this.inhibitorHandler = new discord_akairo_1.InhibitorHandler(this, {
      directory: './bot/modules/inhibitors/',
      extensions: [
        '.js'
      ]
    })
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
    this.inhibitorHandler.loadAll()
    // Listener Handler
    this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
      directory: './bot/modules/listeners/',
      extensions: [
        '.js'
      ]
    })
    this.commandHandler.useListenerHandler(this.listenerHandler)
    this.listenerHandler.loadAll()
  }
}
exports.CustomClient = CustomClient
// # sourceMappingURL=Client.js.map
