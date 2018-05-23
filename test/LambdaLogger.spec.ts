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
});
