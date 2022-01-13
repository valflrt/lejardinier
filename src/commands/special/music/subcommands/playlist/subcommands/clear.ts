import CCommand from "../../../../../../managers/commands/classes/command";

import database from "../../../../../../managers/database";

import reactions from "../../../../../../assets/reactions";

const clear = new CCommand()
  .setName("clear")
  .addAlias("cl")
  .setDescription(`Clear the current playlist`)
  .setExecution(async (messageInstance) => {
    let { methods, message } = messageInstance;
    let cleared = await database.guilds.updateOne(
      {
        id: message.guildId!,
      },
      { playlist: [] }
    );
    if (cleared.ok === 1)
      return methods.sendTextEmbed(
        `${reactions.success.random} Playlist cleared`
      );
  })
  .addHelpCommand();

export default clear;