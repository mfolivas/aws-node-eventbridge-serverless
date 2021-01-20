# aws-node-eventbridge-serverless
Create an AWS lambda with an `eventbridge` events.

Instructions:
- Deploy the application `sls deploy`
- Change the `test.js` depending on the two events
- Launch the `sendTransaction` function to push events to the event bus `sls invoke -f sendTransaction`

The application is listening to three different patterns.  To re-use the same 