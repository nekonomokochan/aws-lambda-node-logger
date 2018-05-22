/**
 * AwsLambdaNodeLogger
 *
 * @author https://github.com/keitakn
 * @since 2018-05-23
 * @link https://tools.ietf.org/html/rfc5424
 */
export default class AwsLambdaNodeLogger {
  /**
   * 0 Emergency (RFC5424)
   * system is unusable
   */
  emergency() {
    return "EMERGENCY";
  }

  /**
   * 1 Alert (RFC5424)
   * action must be taken immediately
   */
  alert() {}

  /**
   * 2 Critical (RFC5424)
   * critical conditions
   */
  critical() {}

  /**
   * 3 Error (RFC5424)
   * error conditions
   */
  error() {}

  /**
   * 4 Warning (RFC5424)
   * warning conditions
   */
  warning() {}

  /**
   * 5 Notice (RFC5424)
   * normal but significant condition
   */
  notice() {}

  /**
   * 6 Informational (RFC5424)
   * informational messages
   */
  informational() {}

  /**
   * 7 Debug (RFC5424)
   * debug-level messages
   */
  debug() {}
}
