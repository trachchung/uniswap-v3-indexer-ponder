import winston from "winston";
import path from "path";

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), "logs");

// Configure Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "uniswap-v3-indexer" },
  transports: [
    // Write all logs with level 'info' and below to output.log
    new winston.transports.File({
      filename: path.join(logsDir, "output.log"),
      maxsize: 10242880, // 10MB
      maxFiles: 5,
    }),
    // Write all logs with level 'error' and below to error.log
    new winston.transports.File({
      filename: path.join(logsDir, "error.log"),
      level: "error",
      maxsize: 10242880, // 10MB
      maxFiles: 5,
    }),
  ],
});

// If we're not in production, log to the console as well
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

export default logger;
