import { LambdaLogger } from "../src/index";
import CustomError from "./lib/CustomError";
import * as util from "util";

describe("LambdaLogger", () => {
  it("should be able to output Emergency logs", () => {
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

    const logOutput = LambdaLogger.emergency(error);

    const expectedContents = `EMERGENCY \n ${util.inspect(error, false, null)}`;

    expect(logOutput.logLevel).toBe("EMERGENCY");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Alert logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.alert(message);

    const expectedContents = `ALERT \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ALERT");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Critical logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.critical(message);

    const expectedContents = `CRITICAL \n ${util.inspect(
      message,
      false,
      null
    )}`;

    expect(logOutput.logLevel).toBe("CRITICAL");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Error logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.error(message);

    const expectedContents = `ERROR \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ERROR");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Warning logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.warning(message);

    const expectedContents = `WARNING \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("WARNING");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Notice logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.notice(message);

    const expectedContents = `NOTICE \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("NOTICE");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Informational logs", () => {
    const message = "hello";

    const logOutput = LambdaLogger.informational(message);

    const expectedContents = `INFORMATIONAL \n ${util.inspect(
      message,
      false,
      null
    )}`;

    expect(logOutput.logLevel).toBe("INFORMATIONAL");
    expect(logOutput.contents).toBe(expectedContents);
  });

  it("should be able to output Debug logs", () => {
    const messages = ["hello", "world"];

    const logOutput = LambdaLogger.debug(messages);

    const expectedContents = `DEBUG \n ${util.inspect(messages, false, null)}`;

    expect(logOutput.logLevel).toBe("DEBUG");
    expect(logOutput.contents).toBe(expectedContents);
  });
});
