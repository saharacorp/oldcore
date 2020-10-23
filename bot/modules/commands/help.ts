import Commando from "discord.js-commando";

export default class HelpCommand extends Commando.Command {
    constructor(client: any) {
        super(client, {
            name: "test",
            group: "Utility",
            memberName: "test",
            description: "This is a test command"
        });
    }

    run(message: any) {
        return message.reply("Send help");
    }
}