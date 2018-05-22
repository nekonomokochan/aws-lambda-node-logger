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
   * @param {Error} error
   * @returns {LambdaLogOutput}
   */
  static emergency(error: Error): LambdaLogOutput {
    const result = `EMERGENCY \n ${util.inspect(error, false, null)}`;
    console.log(result);
    return {
      logLevel: "EMERGENCY",
      content: result
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
}
