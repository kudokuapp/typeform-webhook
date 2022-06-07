const dotenv = require('dotenv')
dotenv.config()
const { google } = require('googleapis')
const MailComposer = require('nodemailer/lib/mail-composer')
const tokens = require('./secure/token.json')

const getGmailService = () => {

    const { CLIENT_SECRET: client_secret,
            CLIENT_ID: client_id,
            REDIRECT_URIS: redirect_uris } = process.env
    
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris)
    
    oAuth2Client.setCredentials(tokens)
    
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client })
    
    return gmail
}

const encodeMessage = (message) => {
    return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

const createMail = async (options) => {
    const mailComposer = new MailComposer(options)
    const message = await mailComposer.compile().build()
    return encodeMessage(message)
}

const prepareMail = async (options) => {
    const gmail = getGmailService()
    const rawMessage = await createMail(options)
    const { data: { id } = {} } = await gmail.users.messages.send({
        userId: 'me',
        resource: {
            raw: rawMessage
        }
    })
    
    return id
}


//send email using this
const sendMail = async (email, lang) => {

    let options

    if (lang === 'id') {
      options = {
        to: email,
        replyTo: "furqon@kudoku.id",
        subject: "Hello ASU",
        text: "This email is sent from the Kudoku team",
        html: `<p>🙋🏻‍♀️  Halo orang Indo</p>`,
        textEncoding: "base64",
      }
    }
    
    else if (lang === 'en') {
      options = {
        to: email,
        replyTo: "furqon@kudoku.id",
        subject: "Hello (english form)",
        text: "This email is sent from the Kudoku team",
        html: `<p>🙋🏻‍♀️  Hello english man</p>`,
        textEncoding: "base64",
      }
    }

    const messageId = await prepareMail(options)
    
    return messageId
}

module.exports = sendMail