import Commando from "discord.js-commando";
export default class HelpCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "test",
            group: "Utility",
            memberName: "test",
            description: "This is a test command"
        });
    }
    run(message) {
        return message.reply("Send help");
    }
}
