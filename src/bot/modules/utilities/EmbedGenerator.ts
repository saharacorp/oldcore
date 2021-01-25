// Pluto - src/bot/modules/utilities/EmbedGenerator.ts
// Written by Brendan Lane - https://brndnln.dev/

// Import Necessary Libraries
import { MessageEmbed } from 'discord.js'
import { Embed } from '../../../oob_modules/interfaces/Interfaces'

// Start of module

// Generate embed
function genEmbed (config: Embed): MessageEmbed {
  // Create embed and set required title
  const embedGen = new MessageEmbed().setTitle(config.title)
  // Start optional additions
  if (config.description !== undefined) {
    embedGen.setDescription(config.description)
  }
  if (config.color !== undefined) {
    embedGen.setColor(config.color)
  }
  if (config.author !== undefined) {
    embedGen.setAuthor(config.author.name, config.author.image, config.author.link)
  }

  if (config.footer !== undefined) {
    embedGen.setFooter(config.footer.text, config.footer.image)
  }
  // Return generated embed
  return embedGen
}

// Export necessary functions
export {
  genEmbed
}
