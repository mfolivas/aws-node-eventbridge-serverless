'use strict';
const Test = require('./test')

module.exports.transactions = async event => {
  console.log('All transactions', JSON.stringify(event, null, 2))
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

module.exports.xyz = async event => {
  console.log('Transaction for XYZ', JSON.stringify(event, null, 2))
}

module.exports.send = async () => {
  return await Test.sedTransaction()
}