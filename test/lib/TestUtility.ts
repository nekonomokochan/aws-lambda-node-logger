/**
 * TestUtility(This Class is use Only TestCode)
 */
export default class TestUtility {
  /**
   * @return {string}
   */
  public static extractSlackTokenFromEnv(): string {
    const slackToken = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_TOKEN;
    if (typeof slackToken === "string") {
      return slackToken;
    }

    return "";
  }

  /**
   * @return {string}
   */
  public static extractSlackChannelFromEnv(): string {
    const slackChannel = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_CHANNEL;
    if (typeof slackChannel === "string") {
      return slackChannel;
    }

    return "";
  }
}
