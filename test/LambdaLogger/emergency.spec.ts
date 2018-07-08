import { LambdaLoggerFactory } from "../../src/index";
import CustomError from "../lib/CustomError";
import * as util from "util";
import { LogLevel } from "../../src/LogLevel";
import TestUtility from "../lib/TestUtility";

describe("LambdaLogger.emergency", () => {
  it("should be logged output", async () => {
    const error = new CustomError("should be able to output Emergency logs");
    error.optionalObject = {
      list: [1, 2, 3, 4],
      object: {
        title: "test",
        price: 3000,
        user: {
          id: 999,
          name: "keita"
        }
      },
      func: (value: number) => {
        return value * 3;
      }
    };

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.emergency(error);

    const expectedContext = `EMERGENCY \n ${util.inspect(error, false, null)}`;

    expect(logOutput.logLevel).toBe("EMERGENCY");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should log is notified to the slack", async () => {
    const error = new CustomError("should be able to output Emergency logs");
    error.optionalObject = {
      list: [1, 2, 3, 4],
      object: {
        title: "test",
        price: 3000,
        user: {
          id: 999,
          name: "keita"
        }
      },
      func: (value: number) => {
        return value * 3;
      }
    };

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.DEBUG,
      TestUtility.extractSlackTokenFromEnv(),
      TestUtility.extractSlackChannelFromEnv()
    );
    const logOutput = await lambdaLogger.emergency(error, true);

    const expectedContext = `EMERGENCY \n ${util.inspect(error, false, null)}`;

    expect(logOutput.logLevel).toBe("EMERGENCY");
    expect(logOutput.context).toBe(expectedContext);
  });
});
