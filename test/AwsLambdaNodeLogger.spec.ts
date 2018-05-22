import AwsLambdaNodeLogger from "src/AwsLambdaNodeLogger";

describe("AwsLambdaNodeLogger", () => {
  it("should be able to output Emergency logs", () => {
    const logger = new AwsLambdaNodeLogger();

    expect(logger.emergency()).toBe("EMERGENCY");
  });
});
