import { Context, SNSEvent } from "aws-lambda";
import { initLogger } from "./logger.js";

// TODO: update those
// See @types/aws-lambda for a list of possible triggers and results.
type Event = SNSEvent;
type Result = void;

export function handler(event: Event, context: Context): Promise<Result> {
  initLogger({ logLevel: process.env.LOG_LEVEL });
  return handleEvent({ event, context });
}

// TODO: put real code here.
export function handleEvent(params: {
  event: Event;
  context: Context;
}): Promise<Result> {
  const { event } = params;
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return Promise.resolve();
}
