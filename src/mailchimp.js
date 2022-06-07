const dotenv = require('dotenv')
dotenv.config()
const mailchimp = require("@mailchimp/mailchimp_marketing")

//Mailchimp credentials
const { MAILCHIMP_API_KEY: mailchimpAPI,
        MAILCHIMP_SERVER_PREFIX: mailchimpServer,
        MAILCHIMP_LISTS_ID: mailchimpList } = process.env



//Initialize mailchimp
const mailChimpConfig = () => {
    mailchimp.setConfig({ apiKey: mailchimpAPI,
                          server: mailchimpServer })
}



const sendMailChimp = (firstName, lastName, email, wa) => {
    
    mailChimpConfig()

    mailchimp.lists.addListMember(mailchimpList, {
        email_address: email,
        status: "subscribed",
        merge_fields: { FNAME: firstName,
                        LNAME: lastName,
                        PHONE: wa }
    })

    .catch((e) => { console.error(e) })
}

module.exports = sendMailChimp