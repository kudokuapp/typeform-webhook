const express = require("express")
const router = express.Router()

const verifySignature = require('../src/typeformsignature')
const { dbQueryUsersData } = require('../src/db')
const { dataCleaning1 } = require('../src/datacleaning')
const { sendMailType1 } = require("../email/email")

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
        const { firstName, lastName, age, gender, email, wa } = dataCleaning1(
            form_response.answers[0].text, 
            form_response.answers[1].text, 
            form_response.answers[2].number, 
            form_response.answers[3].choice.label, 
            form_response.answers[4].email, 
            form_response.hidden.wa)
        const genderUnclean = form_response.answers[3].choice.label
        const waUnclean = form_response.hidden.wa

        dbQueryUsersData(firstName, lastName, age, gender, email, wa)

        if (form_response.form_id === "PZR271ql") {
            sendMailType1(email, 'en', firstName, lastName, age, genderUnclean, waUnclean)
              .then((messageId) => console.log("Message sent successfully:", messageId))
              .catch((err) => console.error(err))
          } 
        else if (form_response.form_id === "Aq7EqLjd") {
            sendMailType1(email, 'id', firstName, lastName, age, genderUnclean, waUnclean)
              .then((messageId) => console.log("Message sent successfully:", messageId))
              .catch((err) => console.error(err))
          }
    }
})

module.exports = router