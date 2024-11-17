import build from "pino-abstract-transport";
import db from "./db";
import { logsTable } from "./schema";

export default function () {
	return build(async (source) => {
		const logs = await source.toArray();
		await db
			.insert(logsTable)
			.values(logs.map((log) => ({ content: JSON.stringify(log) })));
	});
}
