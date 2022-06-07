# typeform-webhook-personal-form
This repository is for the Kudoku's personal form Typeform webhook.

Project maintainers and builders: *Furqon Wilogo*

---

To start the development server, first we need to install the dependencies:
```
npm install
```
Then, make a `.env` file on the **root** folder with the proper environment variables:
|        Variable         |         Provider          |
| ----------------------- | ------------------------- |
| TYPEFORM_WEBHOOK_SECRET | Typeform                  |
| DB_USERNAME             | DigitalOcean (postgreSQL) |
| DB_PASSWORD             | DigitalOcean (postgreSQL) |
| DB_HOST                 | DigitalOcean (postgreSQL) |
| DB_PORT                 | DigitalOcean (postgreSQL) |
| DB_DATABASE             | DigitalOcean (postgreSQL) |
| MAILCHIMP_API_KEY       | MailChimp                 |
| MAILCHIMP_SERVER_PREFIX | MailChimp                 |
| MAILCHIMP_LISTS_ID      | MailChimp                 |
| PORT                    | Local machine             |

N.B.: Make sure you also have a `.crt` file for connecting the database. Place it under `secure/ca-certificate.crt`


Then, using `yarn`,
```
yarn dev
```
---
# Asd