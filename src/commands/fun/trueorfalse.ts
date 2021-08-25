import MessageInstance from "../../bot/message";
import ReplyMethods from "../../bot/methods";
import { Command } from "../../types";
import * as utils from "../../utils"

const trueorfalse: Command = {
	name: "t/f",
	description: `Answer "true" or "false" randomly`,
	syntax: `true or false [?sentence]`,
	execution: (messageInstance: MessageInstance) => {
		let { methods, message, bot, commandArgs } = messageInstance;
		methods.sendEmbed(`${commandArgs && `${ReplyMethods.mention(message.author.id)}\n${commandArgs}\n${ReplyMethods.mention(bot.user!.id)}\n`}${utils.randomItem("true !", "false !")}`)
	}
}

export default trueorfalse;