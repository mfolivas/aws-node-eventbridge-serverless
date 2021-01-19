const AWS = require('aws-sdk')

module.exports.sedTransaction = async () => {
    const eventBridge = new AWS.EventBridge()
    const transaction = {
        Entries: [
            {
                EventBusName: 'transactions',
                Source: 'acme.transactions.xyz',
                DetailType: 'Transaction events',
                Detail: JSON.stringify(extractTransaction())
            }

        ]
    }
    console.log('Sending the following:', transaction)
    const result = await eventBridge.putEvents(transaction).promise()
    return result
}

const extractTransaction = () => {
    const id = Math.floor(Math.random() * 100)
    const amount = Math.floor(Math.random() * 101)
    return {
        id,
        date: new Date().toISOString,
        amount 
    }
}