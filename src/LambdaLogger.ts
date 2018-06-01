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
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 1 Alert (RFC5424)
   * action must be taken immediately
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static alert(value: any): LambdaLogOutput {
    const logLevel = "ALERT";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 2 Critical (RFC5424)
   * critical conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static critical(value: any): LambdaLogOutput {
    const logLevel = "CRITICAL";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 3 Error (RFC5424)
   * error conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static error(value: any): LambdaLogOutput {
    const logLevel = "ERROR";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 4 Warning (RFC5424)
   * warning conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static warning(value: any): LambdaLogOutput {
    const logLevel = "WARNING";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 5 Notice (RFC5424)
   * normal but significant condition
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static notice(value: any): LambdaLogOutput {
    const logLevel = "NOTICE";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 6 Informational (RFC5424)
   * informational messages
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static informational(value: any): LambdaLogOutput {
    const logLevel = "INFORMATIONAL";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

  /**
   * 7 Debug (RFC5424)
   * debug-level messages
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  static debug(value: any): LambdaLogOutput {
    const logLevel = "DEBUG";
    const contents = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(contents);

    return {
      logLevel,
      contents
    };
  }

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
  private static createContext(logLevel: string, value: any): string {
    return `${logLevel} \n ${util.inspect(value, false, null)}`;
  }
}
