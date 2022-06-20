// This auth.js is the first step of verifying the gmail API
// You have to visit the URL then sign in with your gmail account
// This is to give permission
// Then copy the code from the url given by the gmail API to GMAIL_CODE

const dotenv = require('dotenv')
dotenv.config()
const { google } = require('googleapis')

const { GMAIL_CLIENT_SECRET: client_secret, 
        GMAIL_CLIENT_ID: client_id } = process.env
const gmail_scopes = 'https://www.googleapis.com/auth/gmail.send'
const redirect_uris = 'http://localhost'

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris)

const url = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: [`${gmail_scopes}`]
})

console.log(`Authorize this app by visiting this url: ${url}`)