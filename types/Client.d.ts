import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo'

declare class CustomClient extends AkairoClient {
  commandHandler: CommandHandler;
  inhibitorHandler: InhibitorHandler;
  listenerHandler: ListenerHandler;
  constructor();
}

declare const _default: {
  CustomClient: typeof CustomClient;
}

export default _default
