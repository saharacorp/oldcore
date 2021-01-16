// Pluto - src/oob_modules/interfaces/Interfaces.ts
// Written by Brendan Lane - https://brndnln.dev/

interface Configuration {
  bot: {
    prefix: string
    ownerid: number | number[]
    token: string
    personalization: {
      botName: string
      embed: {
        name: string
        image: string
        link: string
      }
    }
  }
  adminSite: {
    port: number
    username: string
    password: string
  }
}

interface Embed {
  title: string
  description?: string
  color?: string
  author?: {
    name: string
    link?: string
    image?: string
  }
  footer?: {
    text: string
    image?: string
  }
}

export {
  Configuration,
  Embed
}
