import { LambdaLoggerFactory } from "../../src/index";
import * as util from "util";
import { LogLevel } from "../../src/LogLevel";
import TestUtility from "../lib/TestUtility";

describe("LambdaLogger.error", () => {
  it("should be logged output", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.error(message);

    const expectedContext = `ERROR \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ERROR");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should log is notified to the slack", async () => {
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
});
