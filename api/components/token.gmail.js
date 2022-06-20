// This is the second step of the gmail API
// Remember to copy the url given from the URL

const dotenv = require("dotenv");
dotenv.config();
const { google } = require("googleapis");
const fs = require("fs");

const {
  GMAIL_CLIENT_SECRET: client_secret,
  GMAIL_CLIENT_ID: client_id,
  GMAIL_CODE: code
} = process.env;
const redirect_uris = "http://localhost";

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
);

oAuth2Client
  .getToken(code)
  .then(({ tokens }) => {
    fs.writeFileSync("../../token.json", JSON.stringify(tokens));
    console.log("Access token and refresh token stored to token.json");
  })
  .catch((err) => console.error(err));
