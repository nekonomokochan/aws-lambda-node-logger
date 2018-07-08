import { LambdaLoggerFactory } from "../../src/index";
import * as util from "util";
import { LogLevel } from "../../src/LogLevel";
import TestUtility from "../lib/TestUtility";

describe("LambdaLogger.warning", () => {
  it("should be logged output", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.warning(message);

    const expectedContext = `WARNING \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("WARNING");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should log is notified to the slack", async () => {
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
});
