// Pluto - bot/modules/utilities/EmbedGenerator.ts
// Written by Brendan Lane - https://github.com/brendan-lane
// Import necessary modules
// @ts-ignore
import Discord from "discord.js";
// Start of modules
function GenerateEmbed(color, title, authorName, authorLink, authorImg, description, footerText, footerImg) {
    // Create embed using parameters
    var generatedEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setAuthor(authorName, authorImg, authorLink)
        .setDescription(description)
        .setTimestamp()
        .setFooter(footerText, footerImg);
    // Return generated embed
    return generatedEmbed;
}
export { GenerateEmbed };
