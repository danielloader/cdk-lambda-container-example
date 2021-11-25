import * as cdk from '@aws-cdk/core';
import { CDKLambdaDocker } from '../lib/stack';

const app = new cdk.App();

new CDKLambdaDocker(app, 'CDKLambdaDocker', {});
