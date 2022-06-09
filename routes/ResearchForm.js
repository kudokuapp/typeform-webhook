const express = require("express")
const router = express.Router()

const verifySignature = require('../src/typeformsignature')
const { dbQueryUsersAnswers } = require('../src/db')
const sendMailChimp = require('../src/mailchimp')
const { dataCleaning2 } = require('../src/datacleaning')
const { sendMailType2 } = require("../email/email")

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

        // sendMailChimp(firstName, lastName, age, gender, occupation, email, wa)

        dbQueryUsersAnswers(firstName, lastName, age, gender, occupation, email, wa, formToken)
            .then((data)=>{
                let ID = data.id

                if (form_response.form_id === "ZWatAGlx") {
                    sendMailType2(email, 'en', firstName, ID)
                      .then((messageId) => console.log("Message sent successfully:", messageId))
                      .catch((err) => console.error(err))
                }

                else if (form_response.form_id === "U9a430un") {
                    sendMailType2(email, 'id', firstName, ID)
                      .then((messageId) => console.log("Message sent successfully:", messageId))
                      .catch((err) => console.error(err))
                }

            })


    }
})

module.exports = router