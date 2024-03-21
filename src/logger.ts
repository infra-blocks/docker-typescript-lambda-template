import { Logger, pino } from "pino";
export let logger: Logger;
export function initLogger(params: { logLevel?: string }) {
  const { logLevel } = params;

  logger = pino();

  if (logLevel) {
    logger.level = logLevel;
  }
}
