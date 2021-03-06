import { inlineCode } from "@discordjs/builders";

import Command from "../../../features/commands/command";

// subcommands imports
import encode_cmd from "./subcommands/encode";
import decode_cmd from "./subcommands/decode";
import table_cmd from "./subcommands/table";

const morse_cmd = new Command({
  name: "morse",
  description: `Morse code utility command`,
  execution:
    (cmd) =>
    async ({ actions }) => {
      actions.sendTextEmbed(
        `Use ${inlineCode(
          cmd.commands.find((c) => c.name === "encode")!.syntax
        )} to encode text to Morse code`.concat(
          `Use ${
            cmd.commands.find((c) => c.name === "table")!.syntax
          } to get Morse code table`
        )
      );
    },
  commands: () => [encode_cmd, decode_cmd, table_cmd],
});

export default morse_cmd;
