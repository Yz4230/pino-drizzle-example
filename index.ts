import pino from "pino";

const logger = pino({
	transport: {
		targets: [{ target: "pino-pretty" }, { target: "./log-transporter.ts" }],
	},
});

logger.info("Hello, world!");
