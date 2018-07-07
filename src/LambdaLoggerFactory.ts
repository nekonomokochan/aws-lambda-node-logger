import { LogLevel } from "./LogLevel";
import { WebClient } from "@slack/client";
import { SlackNotifier } from "./SlackNotifier";
import { LambdaLogger } from "./LambdaLogger";

/**
 * LambdaLoggerFactory
 *
 * @author https://github.com/keitakn
 * @since 2018-07-08
 */
export class LambdaLoggerFactory {
  /**
   * @param {LogLevel} logLevel
   * @param {string} slackToken
   * @param {string} slackChannel
   * @return {LambdaLogger}
   */
  static create(
    logLevel: LogLevel,
    slackToken: string = "",
    slackChannel: string = ""
  ) {
    const slackWebClient = new WebClient(slackToken);
    const slackNotifier = new SlackNotifier(slackWebClient, slackChannel);

    return new LambdaLogger(logLevel, slackNotifier);
  }
}
