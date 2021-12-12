import { MessageEmbed } from "discord.js";

import { Command } from "../../bot/command";
import { statManager } from "../../middlewares/database";

const stats = new Command({
	name: "stats",
	description: "Get stats",
	arguments: `[?mention]`,
	execution: async (messageInstance) => {
		let { methods, message } = messageInstance;

		let stats =
			message.mentions.members?.size !== 0
				? await statManager.find(
						message.mentions.members!.first()!.id,
						message.guild!.id
				  )
				: await statManager.find(message.author.id, message.guild!.id);

		if (!stats) return methods.sendTextEmbed(`Unknown user`);

		methods.sendCustomEmbed((embed: MessageEmbed) =>
			embed
				.setDescription(`${message.author.toString()}`)
				.addField(`messages sent:`, `${stats!.messageCount}`)
		);
	},
});

export default stats;
