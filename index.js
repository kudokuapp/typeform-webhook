const express = require("express")
const app = express()
app.use(express.raw({ type: "application/json" }))

const verifySignature = require('./src/typeformsignature')
const dbQuery = require('./src/db')
const sendMailChimp = require('./src/mailchimp')
const dataCleaning = require('./src/datacleaning')
const sendMail = require("./email/email");

const port = process.env.PORT || 3000

const listener = app.listen(port, () => {
    console.log(`Your app is listening on port ${listener.address().port}`)
})


// //Webhook start
// app.post("/webhook", async(req, res) => {
//     console.log("~> webhook received")

//     //Security check
//     const signature = req.headers["typeform-signature"]
//     const isValid = verifySignature(signature, req.body.toString())
//     if (!isValid) {
//         throw new Error("Webhook signature is not valid")
//     }

//     res.sendStatus(200)

//     const { event_type, form_response } = JSON.parse(req.body)

//     //Filter response events only
//     if (event_type === "form_response") {
//         const { firstName, lastName, email, wa } = dataCleaning(form_response.answers[0].text, form_response.answers[1].text, form_response.answers[2].email, form_response.hidden.wa)

//         dbQuery(firstName, lastName, email, wa)
        
//         sendMailChimp(firstName, lastName, email, wa)

//         if (form_response.form_id === "PZR271ql") {
//             sendMail(email, 'en')
//               .then((messageId) => console.log("Message sent successfully:", messageId))
//               .catch((err) => console.error(err))
//           } 
//         else if (form_response.form_id === "Aq7EqLjd") {
//             sendMail(email, 'id')
//               .then((messageId) => console.log("Message sent successfully:", messageId))
//               .catch((err) => console.error(err))
//           }
//     }
// })


