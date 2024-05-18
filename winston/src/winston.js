import winston from "winston";
const logger = winston.createLogger({
  transports: [new winston.transports.File({ filename: "combined.log" })],
});

let test = 10000;
console.time("Lambu");
for (let i = 0; i < test; i++) {
  logger.log({
    level: "info",
    message: "Hello distributed log files!" + i,
  });
}

console.timeEnd("Lambu");
