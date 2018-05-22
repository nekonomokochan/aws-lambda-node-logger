import * as util from "util";
import { LambdaLogOutput } from "./LambdaLogOutput";

/**
 * LambdaLogger
 *
 * @author https://github.com/keitakn
 * @since 2018-05-23
 * @link https://tools.ietf.org/html/rfc5424
 */
export class LambdaLogger {
  /**
   * 0 Emergency (RFC5424)
   * system is unusable
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static emergency(value: any): LambdaLogOutput {
    const logLevel = "EMERGENCY";
    const contents = LambdaLogger.createLogContents(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 1 Alert (RFC5424)
   * action must be taken immediately
   */
  static alert() {}

  /**
   * 2 Critical (RFC5424)
   * critical conditions
   */
  static critical() {}

  /**
   * 3 Error (RFC5424)
   * error conditions
   */
  static error() {}

  /**
   * 4 Warning (RFC5424)
   * warning conditions
   */
  static warning() {}

  /**
   * 5 Notice (RFC5424)
   * normal but significant condition
   */
  static notice() {}

  /**
   * 6 Informational (RFC5424)
   * informational messages
   */
  static informational() {}

  /**
   * 7 Debug (RFC5424)
   * debug-level messages
   */
  static debug() {}

  /**
   * @param {string} contents
   */
  private static log(contents: string) {
    console.log(contents);
  }

  /**
   * @param {string} logLevel
   * @param value
   * @returns {string}
   */
  private static createLogContents(logLevel: string, value: any): string {
    return `${logLevel} \n ${util.inspect(value, false, null)}`;
  }
}
