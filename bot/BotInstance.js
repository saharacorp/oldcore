import { AkairoClient, CommandHandler } from "discord-akairo";
import config from "./config.js";
class Client extends AkairoClient {
    constructor() {
        super({
            ownerID: config.owner,
        }, {
            disableMentions: "everyone"
        });
        this.commandHandler = new CommandHandler(this, {
            directory: "./modules/commands",
            prefix: config.prefix
        });
    }
}
const client = new Client();
class Pluto {
    constructor(token) {
        s;
        this.token = token;
    }
    start() {
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
                console.log("[Pluto] ? For some reason, The system cannot tell if the discord user is a bot or not.");
            }
            // Set presence to Listening to <prefix>help
            client.user.setPresence({ activity: { name: `${config.prefix}help`, type: "LISTENING" } });
        });
        login(this.token);
    }
}
function login(token) {
    client.login(token);
}
export default {
    Pluto
};
