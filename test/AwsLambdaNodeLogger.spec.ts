import AwsLambdaNodeLogger from "../src/AwsLambdaNodeLogger";
import CustomError from "./lib/CustomError";
import * as util from "util";

describe("AwsLambdaNodeLogger", () => {
  it("should be able to output Emergency logs", () => {
    const error = new CustomError("should be able to output Emergency logs");
    error.optionalObject = {
      list: [1, 2, 3, 4],
      object: { title: "test", price: 3000 },
      func: (value: number) => {
        return value * 3;
      }
    };

    const result = AwsLambdaNodeLogger.emergency(error);

    const expectedContent = `EMERGENCY \n ${util.inspect(error, false, null)}`;

    expect(result.logLevel).toBe("EMERGENCY");
    expect(result.content).toBe(expectedContent);
  });
});
