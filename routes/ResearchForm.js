const express = require("express")
const router = express.Router()

const verifySignature = require('../api/components/verifysignature')
const { dbQueryUsersAnswers, dbQueryIfUsersExists } = require('../api/database')
const sendMailChimp = require('../api/mailchimp')
const { dataCleaning2 } = require('../api/components/datacleaning')
const sendMail = require("../api/gmail")

router.get("/", (req, res) => {
    res.send("it's live!")
})

router.post("/", async(req, res) => {
    console.log("~> webhook received")

    //Security check
    const signature = req.headers["typeform-signature"]
    const isValid = verifySignature(signature, req.body.toString())
    if (!isValid) {
        throw new Error("Webhook signature is not valid")
    }

    res.sendStatus(200)

    const { event_type, form_response } = JSON.parse(req.body)

    //Filter response events only
    if (event_type === "form_response") {

        const { firstName, lastName, age, gender, occupation, email, wa, formToken } = dataCleaning2(
            form_response.hidden.firstname,
            form_response.hidden.lastname,
            form_response.hidden.age,
            form_response.hidden.gender,
            form_response.answers[1].choice.label,
            form_response.hidden.email,
            form_response.hidden.wa,
            form_response.token
        )
        const form_id = form_response.form_id

        const form_lang_en = "ZWatAGlx"
        const form_lang_id = "U9a430un"

        sendMailChimp(firstName, lastName, age, gender, occupation, email, wa)

        dbQueryIfUsersExists(email).then((data) => {
            let ID = data.id

            if (form_id === form_lang_en) {
                sendMail(3, 'en', email, firstName, lastName, age, gender, wa, ID)
                    .then((messageId) => console.log(`Message sent successfully: ${messageId}`))
                    .catch((err) => console.error(err))
            }

            else if (form_id === form_lang_id) {
                sendMail(3, 'id', email, firstName, lastName, age, gender, wa, ID)
                    .then((messageId) => console.log(`Message sent successfully: ${messageId}`))
                    .catch((err) => console.error(err))
            }

        }, 
        
        dbQueryUsersAnswers(firstName, lastName, age, gender, occupation, email, wa, formToken).then((data) => {
            let ID = data.id

            if (form_id === form_lang_en) {
                sendMail(2, 'en', email, firstName, lastName, age, gender, wa, ID)
                  .then((messageId) => console.log(`Message sent successfully: ${messageId}`))
                  .catch((err) => console.error(err))
            }
            
            else if (form_id === form_lang_id) {
                sendMail(2, 'id', email, firstName, lastName, age, gender, wa, ID)
                  .then((messageId) => console.log(`Message sent successfully: ${messageId}`))
                  .catch((err) => console.error(err))
            }

        })
        .catch(err => console.error(err)))
        .catch(err => console.error(err))
    }
})

module.exports = router