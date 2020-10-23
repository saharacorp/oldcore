// Pluto - bot/modules/utilities/EmbedGenerator.ts
// Written by Brendan Lane - https://github.com/brendan-lane

// Import necessary modules
// @ts-ignore
import Discord from "discord.js";

// Start of modules
function GenerateEmbed(color: string, title: string, authorName: string, authorLink: string, authorImg: string, description: string, footerText: string, footerImg: string) {
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

export {
    GenerateEmbed
}