import { WebAPICallResult, WebClient } from "@slack/client";
import { LambdaLogOutput } from "./LambdaLogOutput";

/**
 * SlackNotifier
 *
 * @author https://github.com/keitakn
 * @since 2018-07-06
 */
export class SlackNotifier {
  /**
   * Please Set Your Slack App Token
   */
  private readonly _slackWebClient: WebClient;

  /**
   * Your Slack Channel
   */
  private readonly _channel: string;

  /**
   * @param {WebClient} slackWebClient
   * @param {string} channel
   */
  constructor(slackWebClient: WebClient, channel: string) {
    this._slackWebClient = slackWebClient;
    this._channel = channel;
  }

  /**
   * @return {WebClient}
   */
  get slackWebClient(): WebClient {
    return this._slackWebClient;
  }

  /**
   * @return {string}
   */
  get channel(): string {
    return this._channel;
  }

  /**
   * @param {LambdaLogOutput} lambdaLogOutput
   * @return {Promise<WebAPICallResult>}
   */
  async notify(lambdaLogOutput: LambdaLogOutput): Promise<WebAPICallResult> {
    const params = {
      channel: this.channel,
      text: JSON.stringify(lambdaLogOutput)
    };

    return await this.slackWebClient.chat
      .postMessage(params)
      .then((result: WebAPICallResult) => {
        return Promise.resolve(result);
      })
      .catch((error: Error) => {
        return Promise.reject(error);
      });
  }
}
