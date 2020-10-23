// Pluto - bot/bot.ts
// Written by Brendan Lane - https://github.com/brendan-lane
import config from "./config.js";
import Commando from "discord.js-commando";
import path from "path";
const client = new Commando.CommandoClient({
    commandPrefix: config.prefix,
    owner: config.owner,
    invite: config.supportServer
});
client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(process.cwd(), "bot/modules/commands"));
// On start of bot
client.once("ready", () => {
    // Initial Startup Messages
    console.log(`[Pluto] Logged in as ${client.user.tag}`);
    if (client.user.bot) {
        console.log("[Pluto] ✔ This user is a bot user");
    }
    else if (!client.user.bot) {
        console.log("[Pluto] ✘ This user is not a bot user");
    }
    else {
        console.log("[Pluto] For some reason, The system cannot tell if the discord user is a bot or not.");
    }
    // Set presence to Streaming with carpel tunnel
    client.user.setPresence({ activity: { name: 'with carpal tunnel', type: "STREAMING", url: "https://www.twitch.tv/smallkidwithgun" } });
});
client.login(config.token);
