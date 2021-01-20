const AWS = require('aws-sdk')

module.exports.sedTransaction = async () => {
    const eventBridge = new AWS.EventBridge()
    return eventBridge.putEvents({
        Entries: [
        {
            EventBusName: 'transactions',
            Source: 'acme.transactions',
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