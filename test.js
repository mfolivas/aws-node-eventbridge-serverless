const AWS = require('aws-sdk')

module.exports.sedTransaction = async () => {
    const eventBridge = new AWS.EventBridge()
    console.log(process.env.TRANSACTION_EVENT_BUS_NAME)
    return eventBridge.putEvents({
        Entries: [
        {
            EventBusName: process.env.TRANSACTION_EVENT_BUS_NAME,
            Source: 'acme.transactions.xyz',
            DetailType: 'TransactionEvent',
            Detail: JSON.stringify(extractTransaction()),
        },
        ]
    }).promise()
   /*return eventBridge.putEvents({
        Entries: [
        {
            EventBusName: 'marketing',
            Source: 'acme.newsletter.campaign',
            DetailType: 'UserSignUp',
            Detail: `{ "E-Mail": "someone@acme.com" }`,
        },
        ]
    }).promise()*/
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