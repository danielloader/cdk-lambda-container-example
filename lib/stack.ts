import * as path from "path";

import * as cdk from "@aws-cdk/core";
import * as Lambda from "@aws-cdk/aws-lambda";

export class CDKLambdaDocker extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Configure path to Dockerfile
    const dockerfile = path.join(__dirname, "../src");

    // Create AWS Lambda function and push image to ECR
    new Lambda.DockerImageFunction(this, "function", {
      code: Lambda.DockerImageCode.fromImageAsset(dockerfile),
    });
  }
}
