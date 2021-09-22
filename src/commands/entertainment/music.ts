import { MessageEmbed } from "discord.js";

import { Command } from "../../bot/command";
import MessageInstance from "../../bot/message";

import { playlistManager } from "../../bot/database";
import { PlaylistModel } from "../../database/models/playlist";
import { Song } from "../../bot/music";

import reactions from "../../assets/reactions";

const music = new Command({
	name: "music",
	description: `Music command`,
	execution: (messageInstance: MessageInstance) => {
		let { methods } = messageInstance;


	},
	subcommands: [
		new Command({
			name: "play",
			description: `Start playing music from the playlist`,
			execution: async (messageInstance: MessageInstance) => {
				let { methods } = messageInstance;

			}
		}),
		new Command({
			name: "url",
			description: `Add a song to the playlist from a youtube url`,
			arguments: `[youtube url]`,
			execution: async (messageInstance: MessageInstance) => {
				let { methods, message, commandArgs } = messageInstance;

				// TODO: find a way to replace song.get()

				let song = new Song(commandArgs!);
				await song.init();

				if (!song.songFound) return methods.sendEmbed(`${reactions.error.random()} Song not found please check your youtube url`);

				await playlistManager.addSong(message.guildId!, song.get());

				let songInfo = song.get();

				methods.sendCustomEmbed((embed: MessageEmbed) => embed
					.setThumbnail(songInfo.details.thumbnails[0].url)
					.setDescription(`${reactions.success.random()} Successfully added song: ${songInfo.name}`)
				);
			}
		}),
		new Command({
			name: "skip",
			description: `Skip current song`,
			execution: (messageInstance: MessageInstance) => {
				let { methods } = messageInstance;
			}
		}),
		new Command({
			name: "clear",
			description: `Clear the playlist`,
			execution: async (messageInstance: MessageInstance) => {
				let { methods, message } = messageInstance;

				let playlist = await PlaylistModel.findOne({ guildId: message.guildId! })
				if (!playlist) {
					new PlaylistModel({ guildId: message.guildId });
					return methods.sendEmbed(`Playlist already cleared`);
				}
				playlist.songs = [];
				await playlist.save();
				methods.sendEmbed(`${reactions.success.random()} Playlist successfully cleared`)
			}
		})
	]
})

export default music;