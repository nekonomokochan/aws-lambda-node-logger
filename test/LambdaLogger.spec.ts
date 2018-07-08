import { LambdaLoggerFactory } from "../src/index";
import * as util from "util";
import { LogLevel } from "../src/LogLevel";
import TestUtility from "./lib/TestUtility";

describe("LambdaLogger", () => {
  it("should be able to output Error logs", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.error(message, true);

    const expectedContext = `ERROR \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ERROR");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Warning logs", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.warning(message, true);

    const expectedContext = `WARNING \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("WARNING");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Notice logs", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.notice(message, true);

    const expectedContext = `NOTICE \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("NOTICE");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Informational logs", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.informational(message, true);

    const expectedContext = `INFORMATIONAL \n ${util.inspect(
      message,
      false,
      null
    )}`;

    expect(logOutput.logLevel).toBe("INFORMATIONAL");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Debug logs", async () => {
    const messages = ["hello", "world"];

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.INFORMATIONAL,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.debug(messages, true);

    const expectedContext = `DEBUG \n ${util.inspect(messages, false, null)}`;

    expect(logOutput.logLevel).toBe("DEBUG");
    expect(logOutput.context).toBe(expectedContext);
  });
});
