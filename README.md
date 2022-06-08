# typeform-webhook-personal-form
This repository is for the Kudoku's personal form Typeform webhook.

Project maintainers and builders: *Furqon Wilogo*

[![Netlify Status](https://api.netlify.com/api/v1/badges/8caa9901-e270-4b36-a4c1-d6749ad03b06/deploy-status)](https://app.netlify.com/sites/poetic-frangollo-d86447/deploys)

---

To start the development server, first we need to install the dependencies:
```
npm install
```
Then, make a `.env` file on the **root** folder with the proper environment variables:
|          Variable           |         Provider          |
| --------------------------- | ------------------------- |
| TYPEFORM_WEBHOOK_SECRET     | Typeform                  |
| DB_USERNAME                 | DigitalOcean (postgreSQL) |
| DB_PASSWORD                 | DigitalOcean (postgreSQL) |
| DB_HOST                     | DigitalOcean (postgreSQL) |
| DB_PORT                     | DigitalOcean (postgreSQL) |
| DB_DATABASE                 | DigitalOcean (postgreSQL) |
| MAILCHIMP_API_KEY           | MailChimp                 |
| MAILCHIMP_SERVER_PREFIX     | MailChimp                 |
| MAILCHIMP_LISTS_ID          | MailChimp                 |
| PORT                        | Local machine             |
| CLIENT_ID                   | GMAIL API*                |
| PROJECT_ID                  | GMAIL API*                |
| AUTH_URI                    | GMAIL API*                |
| TOKEN_URI                   | GMAIL API*                |
| AUTH_PROVIDER_X509_CERT_URL | GMAIL API*                |
| CLIENT_SECRET               | GMAIL API*                |
| REDIRECT_URIS               | GMAIL API*                |
| GMAIL_SCOPES                | GMAIL API*                |
| CODE_FROM_GOOGLE            | GMAIL API**               |

N.B.: Make sure you also have a `.crt` file for connecting the database. Place it under `secure/ca-certificate.crt`

*You get this the first time setting up the GMAIL API.

**You get this after running `auth.js`, go to the url, sign in with your respective google account that you set up for the GMAIL API, then it will be redirected to the `REDIRECT_URIS` with code in the URL Parameters. You then copy the code and past it into `CODE_FROM_GOOGLE`.


Then, using `yarn`,
```
yarn dev
```
---
# APIs Used
In this webhook, we use, in total, 3 APIs.
1. Typeform API
2. MailChimp API
3. GMAIL API

We also used **PostgreSQL** that were provided by DigitalOcean.

---

# Folders Structures
```
email/
    ├── auth.js
    ├── email.js
    ├── token.js
    └── token.json
...
│  
...
src/
    ├── datacleaning.js
    ├── db.js
    ├── mailchimp.js
    └── typeformsignature.js
...
│  
...
index.js
```

- The webhook initialized and run on `index.js`.
- Every gmail related items will be on the `email/` folder.
- `src/datacleaning.js` has functions to clean data coming in from the webhook.
- `src/db.js` is about connecting and making query for the SQL database.
- `src/mailchimp.js` is about MailChimp API
- `src/typeformsignature.js` has functions to verified that the webhook is secure and comes from TypeForm itself.


# Gmail API
To properly connect the gmail API, first read [this](https://www.labnol.org/google-api-service-account-220405) and [this](https://developers.google.com/gmail/api/quickstart/nodejs). Then:
1. Run `auth.js`
2. Go to the URL
3. Sign in using your google account that has permission to the gmail API
4. You then will be redirected
5. Copy the code given. The url should be like this `https://localhost?code=__code__&scope=xxx`
6. Paste the code to the enviroment variable `CODE_FROM_GOOGLE`
7. Then run `token.js`
8. You will then have `token.json` automatically generated
9. Then it will work as normal