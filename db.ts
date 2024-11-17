import { drizzle } from "drizzle-orm/libsql";
import env from "./env";
import * as schema from "./schema";

export default drizzle({ connection: { url: env.DB_URL }, schema });
