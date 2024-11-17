import { defineConfig } from "drizzle-kit";
import env from "./env";

export default defineConfig({
	dialect: "sqlite",
	schema: "./schema.ts",
	dbCredentials: {
		url: env.DB_URL,
	},
});
