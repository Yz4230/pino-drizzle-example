import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const logsTable = sqliteTable("logs", {
	id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
	content: text({ mode: "json" }),
	created_at: integer({ mode: "timestamp_ms" }).$default(() => new Date()),
});
