# typeform-webhook

This repository is for the Kudoku's Typeform webhook.

Project maintainers and builders: _Furqon Wilogo_

[![DigitalOcean](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg)](https://hammerhead-app-si5rm.ondigitalocean.app/)

---

To start the development server, first we need to install the dependencies:

```
yarn install
```

Then, make a `.env` file on the **root** folder with the proper environment variables:
| Variable | Provider |
| --------------------------------- | ------------------------- |
| TYPEFORM_WEBHOOK_SECRET | Typeform |
| PGUSER | DigitalOcean (postgreSQL) |
| PGPASSWORD | DigitalOcean (postgreSQL) |
| PGHOST | DigitalOcean (postgreSQL) |
| PGPORT | DigitalOcean (postgreSQL) |
| PGDATABASE | DigitalOcean (postgreSQL) |
| CA_CERT | DigitalOcean (postgreSQL) |
| MAILCHIMP_API_KEY | MailChimp |
| MAILCHIMP_SERVER_PREFIX | MailChimp |
| MAILCHIMP_LISTS_ID | MailChimp |
| PORT | Local machine |
| GMAIL_CLIENT_ID | GMAIL API* |
| GMAIL_PROJECT_ID | GMAIL API* |
| GMAIL_CLIENT_SECRET | GMAIL API\* |
| GMAIL_CODE | GMAIL API\*\* |

N.B.: Make sure you also have a `.crt` file for connecting the database. You can also place it under the environment variable `CA_CERT`. Look for 'multi-line dotenv support'.

\*You get this the first time setting up the GMAIL API.

\*\*You get this after running `auth.gmail.js`, go to the url, sign in with your respective google account that you set up for the GMAIL API, then it will be redirected to the localhost with code in the URL Parameters. You then copy the code and past it into `GMAIL_CODE`.

Then, using `yarn`,

```
yarn start
```

---

# APIs Used

In this webhook, we use, in total, 3 APIs.

1. Typeform API
2. MailChimp API
3. GMAIL API

We also used **PostgreSQL** that were provided by DigitalOcean.

---

# Gmail API

To properly connect the gmail API, first read [this](https://www.labnol.org/google-api-service-account-220405) and [this](https://developers.google.com/gmail/api/quickstart/nodejs). Then:

1. Run `auth.gmail.js`
2. Go to the URL
3. Sign in using your google account that has permission to the gmail API
4. You then will be redirected
5. Copy the code given. The url should be like this `https://localhost?code=__code__&scope=xxx`
6. Paste the code to the enviroment variable `GMAIL_CODE`
7. Then run `token.gmail.js`
8. You will then have `token.json` automatically generated
9. Then it will work as normal

# Routes

There will be two routes:

1. `/personal-data-webhook`
2. `/research-form-webhook`

## /personal-data-webhook

This routes handle all the webhooks coming from the personal form in TypeForm.

## /research-form-webhook

This route handle all the webhook coming from the research form in TypeForm.
