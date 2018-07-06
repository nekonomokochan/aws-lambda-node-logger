import { SlackNotifier } from "../src/SlackNotifier";
import { WebClient } from "@slack/client";
import { LambdaLogger } from "src/LambdaLogger";
import CustomError from "./lib/CustomError";
import TestUtility from "./lib/TestUtility";

describe("SlackNotifier", () => {
  it("should send message to Slack's channel", async () => {
    const client = new WebClient(TestUtility.extractSlackTokenFromEnv());
    const channel = TestUtility.extractSlackChannelFromEnv();

    const slackNotifier = new SlackNotifier(client, channel);

    const customError = new CustomError();
    const loggerContext = LambdaLogger.alert(customError);

    const result = await (<any>slackNotifier.notify(loggerContext));

    expect(result.ok).toBe(true);
    expect(typeof result.channel).toBe("string");
    expect(typeof result.ts).toBe("string");
    expect(typeof result.message.text).toBe("string");
    expect(typeof result.message.username).toBe("string");
    expect(typeof result.message.bot_id).toBe("string");
    expect(result.message.type).toBe("message");
    expect(result.message.subtype).toBe("bot_message");
    expect(typeof result.message.ts).toBe("string");
    expect(result.scopes).toEqual(["identify", "chat:write:bot"]);
    expect(result.acceptedScopes).toEqual(["chat:write:bot"]);
  });
});
