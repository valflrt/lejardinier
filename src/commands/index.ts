import Commands from "../bot/commands";

// utility commands
import help from "./utility/help";

// fun commands
import hey from "./fun/hey";
import trueorfalse from "./fun/trueorfalse";

// exporting commands object (commands are ordered here)
export default new Commands(
	help,
	hey,
	trueorfalse
)