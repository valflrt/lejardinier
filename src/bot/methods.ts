import { Message, MessagePayload, ReplyMessageOptions } from "discord.js";

import MessageInstance from "./message";

export default class ReplyMethods {
	private message: Message;
	private messageInstance: MessageInstance;

	constructor(messageInstance: MessageInstance) {
		this.message = messageInstance.message;
		this.messageInstance = messageInstance;
	}

	public reply = (options: string | MessagePayload | ReplyMessageOptions) => {
		return this.message.reply(options);
	};

	public send = (options: string | MessagePayload | ReplyMessageOptions) => {
		return this.message.channel.send(options);
	};

	public sendEmbed = (content: string, options: ReplyMessageOptions = {}) => {
		if (!options.embeds) options.embeds = [];
		options.embeds.push(this.returnEmbed(content));
		return this.reply(options);
	};

	public returnEmbed = (text: string) => {
		return this.messageInstance.generateEmbed().setDescription(text);
	};

	public sendCustomEmbed = (
		setup: Function,
		options: ReplyMessageOptions = {}
	) => {
		if (!options.embeds) options.embeds = [];
		options.embeds.push(this.returnCustomEmbed(setup));
		return this.reply(options);
	};

	public returnCustomEmbed = (setup: Function) =>
		setup(this.messageInstance.generateEmbed());
}
