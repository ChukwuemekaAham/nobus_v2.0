import * as winston from "winston";
import "winston-daily-rotate-file";

export function createLogger(loggerName) {
  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { name: loggerName },
    transports: [new winston.transports.Console()],
  });
}
