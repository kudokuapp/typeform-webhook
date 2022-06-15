const dotenv = require('dotenv')
dotenv.config()
const crypto = require('crypto')

const webhookSecret = process.env.TYPEFORM_WEBHOOK_SECRET

const verifySignature = (receivedSignature, payload) => {
    const hash = crypto
        .createHmac("sha256", webhookSecret)
        .update(payload)
        .digest("base64")
    
    return receivedSignature === `sha256=${hash}`
}

module.exports = verifySignature