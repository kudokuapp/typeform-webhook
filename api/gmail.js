const dotenv = require('dotenv');
dotenv.config();

const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
const tokens = require('../secure/token.json');
const emailType1 = require('./email/type1');
const emailType2 = require('./email/type2');
const emailType3 = require('./email/type3');

const getGmailService = () => {
  const { GMAIL_CLIENT_SECRET: client_secret, GMAIL_CLIENT_ID: client_id } =
    process.env;
  const redirect_uris = 'http://localhost';

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );

  oAuth2Client.setCredentials(tokens);

  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const prepareMail = async (options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const obj = {
    userId: 'me',
    resource: {
      raw: rawMessage,
    },
  };
  const { data: { id } = {} } = await gmail.users.messages.send(obj);

  return id;
};

//send email using this
const sendMail = async (
  type,
  lang,
  email,
  firstName,
  lastName,
  age,
  gender,
  wa,
  ID = 1
) => {
  let options = {
    to: email,
    from: 'Furqon @ Kudoku <furqon@kudoku.id>',
    replyTo: 'furqon@kudoku.id',
    textEncoding: 'base64',
  };

  if (type === 1) {
    if (lang === 'en') {
      options.subject = `Hi, ${firstName}! Let's meet Kudoku 😎`;
      options.html = emailType1(
        'en',
        firstName,
        lastName,
        age,
        gender,
        email,
        wa
      );
    } else if (lang === 'id') {
      options.subject = `Hi, ${firstName}! Kenalan sama Kudoku yuk 😎`;
      options.html = emailType1(
        'id',
        firstName,
        lastName,
        age,
        gender,
        email,
        wa
      );
    }
  } else if (type === 2) {
    if (lang === 'en') {
      options.subject = `Thanks for joining the Kudoku waitlist 🤩`;
      options.html = emailType2('en', firstName, ID);
    } else if (lang === 'id') {
      options.subject = `Terima kasih sudah ikut Kudoku waitlist 🤩`;
      options.html = emailType2('id', firstName, ID);
    }
  } else if (type === 3) {
    if (lang === 'en') {
      options.subject = `Hmm it seems like you already a Kudos! 🤔`;
      options.html = emailType3('en', firstName, ID);
    } else if (lang === 'id') {
      options.subject = `Hmm nampaknya kamu sudah menjadi Kudos! 🤔`;
      options.html = emailType3('id', firstName, ID);
    }
  }

  const messageId = await prepareMail(options);

  return messageId;
};

module.exports = sendMail;
