import winston from "winston";
import { LOG_FILE_NAME } from "./logging.config.js";

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: LOG_FILE_NAME,
      format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp
        winston.format.json() // Optional: use JSON format
      ),
    }),
  ],
});

export default logger;
