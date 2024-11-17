import { z } from "zod";

const schema = z.object({
	DB_URL: z.string(),
});

export default schema.parse(process.env);
