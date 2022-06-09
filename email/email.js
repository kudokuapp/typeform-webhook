const dotenv = require('dotenv')
dotenv.config()
const { google } = require('googleapis')
const MailComposer = require('nodemailer/lib/mail-composer')
const tokens = require('../secure/token.json')
const { englishType1, bahasaType1 } = require('./html/type1Email')
const { englishType2, bahasaType2 } = require('./html/type2Email')

const getGmailService = () => {

    const { GMAIL_CLIENT_SECRET: client_secret,
            GMAIL_CLIENT_ID: client_id,
            GMAIL_REDIRECT_URIS: redirect_uris } = process.env
    
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
//type=1 for sendMailType1 for sending email completing the personal data form
const sendMailType1 = async (email, lang, firstName, lastName, age, gender, wa) => {

    let options = {
      to: email,
      replyTo: "furqon@kudoku.id",
      textEncoding: "base64",
    }

    if (lang === 'en') {
      // options.text = "This email is sent from the Kudoku team"
      options.subject = `English Type 1`
      options.html = englishType1(firstName, lastName, age, gender, email, wa)
    }

    else if (lang === 'id') {
      // options.text = "Email ini dikirim dari tim Kudoku"
      options.subject = `Bahasa Indonesia Type 1`
      options.html = bahasaType1(firstName, lastName, age, gender, email, wa)
    }

    const messageId = await prepareMail(options)
    
    return messageId
}

//type=2 for sendMailType2 for sending email completing the research form
const sendMailType2 = async (email, lang, firstName, ID) => {
  let options = {
    to: email,
    replyTo: "furqon@kudoku.id",
    textEncoding: "base64",
  }

  if (lang === 'en') {
    // options.text = "This email is sent from the Kudoku team"
    options.subject = `English Type 2`
    options.html = englishType2(firstName, ID)
  }


  else if (lang === 'id') {
    // options.text = "Email ini dikirim dari tim Kudoku"
    options.subject = `Bahasa Indonesia Type 2`
    options.html = bahasaType2(firstName, ID)
  }

  const messageId = await prepareMail(options)
  
  return messageId
}

module.exports = {sendMailType1, sendMailType2}