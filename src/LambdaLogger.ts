import * as util from "util";
import { LambdaLogOutput } from "./LambdaLogOutput";
import { LogLevel } from "./LogLevel";
import { SlackNotifier } from "./SlackNotifier";

/**
 * LambdaLogger
 *
 * @author https://github.com/keitakn
 * @since 2018-05-23
 * @link https://tools.ietf.org/html/rfc5424
 */
export class LambdaLogger {
  /**
   * RFC5424 LogLevel
   */
  private readonly _logLevel: LogLevel;

  /**
   * SlackNotifier
   */
  private readonly _slackNotifier: SlackNotifier;

  /**
   * @param {LogLevel} logLevel
   * @param {SlackNotifier} slackNotifier
   */
  constructor(logLevel: LogLevel, slackNotifier: SlackNotifier) {
    this._logLevel = logLevel;
    this._slackNotifier = slackNotifier;
  }

  /**
   * @return {LogLevel}
   */
  get logLevel(): LogLevel {
    return this._logLevel;
  }

  /**
   * @return {SlackNotifier}
   */
  get slackNotifier(): SlackNotifier {
    return this._slackNotifier;
  }

  /**
   * 0 Emergency (RFC5424)
   * system is unusable
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  emergency(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.EMERGENCY];
    const context = LambdaLogger.createContext(logLevel, value);

    LambdaLogger.log(context);

    return {
      logLevel,
      context
    };
  }

  /**
   * 1 Alert (RFC5424)
   * action must be taken immediately
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  alert(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.ALERT];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.ALERT)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 2 Critical (RFC5424)
   * critical conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  critical(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.CRITICAL];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.CRITICAL)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 3 Error (RFC5424)
   * error conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  error(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.ERROR];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.ERROR)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 4 Warning (RFC5424)
   * warning conditions
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  warning(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.WARNING];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.WARNING)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 5 Notice (RFC5424)
   * normal but significant condition
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  notice(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.NOTICE];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.NOTICE)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 6 Informational (RFC5424)
   * informational messages
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  informational(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.INFORMATIONAL];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.INFORMATIONAL)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * 7 Debug (RFC5424)
   * debug-level messages
   *
   * @param value
   * @returns {LambdaLogOutput}
   */
  debug(value: any): LambdaLogOutput {
    const logLevel = LogLevel[LogLevel.DEBUG];
    const context = LambdaLogger.createContext(logLevel, value);

    if (this.isOutputLog(LogLevel.DEBUG)) {
      LambdaLogger.log(context);
    }

    return {
      logLevel,
      context
    };
  }

  /**
   * @param {LogLevel} logLevel
   * @return {boolean}
   */
  private isOutputLog(logLevel: LogLevel) {
    return this.logLevel >= logLevel;
  }

  /**
   * @param {string} context
   */
  private static log(context: string) {
    console.log(context);
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
