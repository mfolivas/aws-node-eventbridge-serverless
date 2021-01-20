'use strict';
const Test = require('./test')

module.exports.transactions = async event => {
  console.log('All transactions', JSON.stringify(event, null, 2))
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