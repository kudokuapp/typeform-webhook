// This is the second step of the gmail API
// Remember to copy the url given from the URL

const { google } = require('googleapis')
const path = require('path')
const fs = require('fs')

const { CLIENT_SECRET: client_secret, 
    CLIENT_ID: client_id, 
    REDIRECT_URIS: redirect_uris,
    CODE_FROM_GOOGLE: code } = process.env

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris)

oAuth2Client
    .getToken(code)
    .then(({ tokens }) => {
        const tokenPath = path.join(__dirname, 'token.json')
        fs.writeFileSync(tokenPath, JSON.stringify(tokens))
        console.log('Access token and refresh token stored to token.json')
    })
    .catch((err) => console.error(err));