'use strict';
const Test = require('./test')

module.exports.abc = async event => {
  console.log('Transactions for ABC', JSON.stringify(event, null, 2))
  return {
    event
  }
}

module.exports.xyz = async event => {
  console.log('Transaction for XYZ', JSON.stringify(event, null, 2))
  return event
}

module.exports.hello = async event => {
  console.log('Marketing', JSON.stringify(event, null, 2))
  return event
}

module.exports.send = async () => {
  return await Test.sedTransaction()
}