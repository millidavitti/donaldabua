import chalk from "chalk";
import { getErrorMessage } from "./get-error-message";

export function generateErrorLog(
	fnName: string,
	error: unknown,
	mode: "slient" | "throw" = "throw",
) {
	const log = `🚨 ${chalk.red.bold("[Error]")}: ${chalk.blue.bold(
		fnName,
	)} - | ${chalk.cyan.bold("Message")}: ${chalk.bold(getErrorMessage(error))}`;
	console.error(log);
	console.error(error);
	console.error(
		"Cause:",
		(error as Record<string, unknown>).cause ||
			chalk.italic("Cause not available"),
	);

	if (mode === "throw") throw error;
}
