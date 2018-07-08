# aws-lambda-node-logger

[![npm version](https://badge.fury.io/js/%40nekonomokochan%2Faws-lambda-node-logger.svg)](https://badge.fury.io/js/%40nekonomokochan%2Faws-lambda-node-logger)
[![Build Status](https://travis-ci.org/nekonomokochan/aws-lambda-node-logger.svg?branch=master)](https://travis-ci.org/nekonomokochan/aws-lambda-node-logger)
[![Coverage Status](https://coveralls.io/repos/github/nekonomokochan/aws-lambda-node-logger/badge.svg)](https://coveralls.io/github/nekonomokochan/aws-lambda-node-logger)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Logging library for AWS Lambda

## Getting Started

### Install npm package

### `yarn`

`yarn add @nekonomokochan/aws-lambda-node-logger`

### `npm`

`npm install --save @nekonomokochan/aws-lambda-node-logger`

## How To Use

### Use With TypeScript

```typescript
import * as lambda from "aws-lambda";
import { LambdaLoggerFactory, LogLevel } from "@nekonomokochan/aws-lambda-node-logger";

export const tsTest = async (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "TypeScript Test",
      input: event,
    }),
  };

  const error = new Error("TypeScript Error Test");

  const lambdaLogger = LambdaLoggerFactory.create(
    LogLevel.DEBUG,
    extractSlackTokenFromEnv(),
    extractSlackChannelFromEnv()
  );

  await lambdaLogger.error(error, true);
  await lambdaLogger.debug(context, true);

  callback(undefined, response);
};

/**
 * @return {string}
 */
const extractSlackTokenFromEnv = (): string => {
  const slackToken = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_TOKEN;
  if (typeof slackToken === "string") {
    return slackToken;
  }

  return "";
};

/**
 * @return {string}
 */
const extractSlackChannelFromEnv = (): string => {
  const slackChannel = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_CHANNEL;
  if (typeof slackChannel === "string") {
    return slackChannel;
  }

  return "";
};
```

This code is output as follows.

```
START RequestId: 1e46b449-6571-11e8-8af3-e7d42a6dbde1 Version: $LATEST
2018-06-01 16:55:14.864 (+09:00)	1e46b449-6571-11e8-8af3-e7d42a6dbde1	ERROR
 Error: TypeScript Error Test
    at exports.tsTest (/var/task/src/handler.ts:16:17)
    at invoke (/var/runtime/node_modules/awslambda/index.js:286:20)
    at InvokeManager.start (/var/runtime/node_modules/awslambda/index.js:151:9)
2018-06-01 16:55:14.864 (+09:00)	1e46b449-6571-11e8-8af3-e7d42a6dbde1	DEBUG
 { callbackWaitsForEmptyEventLoop: [Getter/Setter],
  done: [Function: done],
  succeed: [Function: succeed],
  fail: [Function: fail],
  logGroupName: '/aws/lambda/aws-lambda-node-logger-test-dev-tsTest',
  logStreamName: '2018/06/01/[$LATEST]66e583f2888346038abb3c08df758232',
  functionName: 'aws-lambda-node-logger-test-dev-tsTest',
  memoryLimitInMB: '1024',
  functionVersion: '$LATEST',
  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
  invokeid: '1e46b449-6571-11e8-8af3-e7d42a6dbde1',
  awsRequestId: '1e46b449-6571-11e8-8af3-e7d42a6dbde1',
  invokedFunctionArn: 'arn:aws:lambda:ap-northeast-1:999999999999:function:aws-lambda-node-logger-test-dev-tsTest' }
END RequestId: 1e46b449-6571-11e8-8af3-e7d42a6dbde1
REPORT RequestId: 1e46b449-6571-11e8-8af3-e7d42a6dbde1	Duration: 0.94 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 22 MB
```

### Use With JavaScript

```javascript
"use strict";

const awsLambdaNodeLogger = require("@nekonomokochan/aws-lambda-node-logger");

module.exports.jsTest = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "JavaScript Test",
      input: event,
    }),
  };

  const error = new Error("JavaScript Error Test");

  const lambdaLogger = awsLambdaNodeLogger.LambdaLoggerFactory.create(
    "DEBUG",
    extractSlackTokenFromEnv(),
    extractSlackChannelFromEnv()
  );

  await lambdaLogger.debug(response, true);
  await lambdaLogger.error(error, true);

  callback(null, response);
};

/**
 * @return {string}
 */
const extractSlackTokenFromEnv = () => {
  const slackToken = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_TOKEN;
  if (typeof slackToken === "string") {
    return slackToken;
  }

  return "";
};

/**
 * @return {string}
 */
const extractSlackChannelFromEnv = () => {
  const slackChannel = process.env.AWS_LAMBDA_NODE_LOGGER_SLACK_CHANNEL;
  if (typeof slackChannel === "string") {
    return slackChannel;
  }

  return "";
};
```

output is the same as TypeScript.

## License
MIT
