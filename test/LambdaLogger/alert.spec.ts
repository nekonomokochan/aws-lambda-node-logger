import { LambdaLoggerFactory } from "../../src/index";
import * as util from "util";
import { LogLevel } from "../../src/LogLevel";
import TestUtility from "../lib/TestUtility";

describe("LambdaLogger.alert", () => {
  it("should be logged output", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.alert(message);

    const expectedContext = `ALERT \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ALERT");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should log is notified to the slack", async () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.alert(message, true);

    const expectedContext = `ALERT \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ALERT");
    expect(logOutput.context).toBe(expectedContext);
  });
});
