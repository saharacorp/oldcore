// Pluto - src/bot/modules/utilities/EmbedGenerator.ts
// Written by Brendan Lane - https://brndnln.dev/

// Import Necessary Libraries
import { MessageEmbed } from 'discord.js'

// Start of module

// Generate embed
function genEmbed (color, title, authorName, authorLink, authorImg, description, footerText, footerImg): MessageEmbed {
  // Return generated embed
  return new MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setAuthor(authorName, authorImg, authorLink)
    .setDescription(description)
    .setTimestamp()
    .setFooter(footerText, footerImg)
}

// Export necessary functions
export {
  genEmbed
}
