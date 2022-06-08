const express = require("express")
const app = express()
app.use(express.raw({ type: "application/json" }))
const personalFormRoute = require("./routes/PersonalForm")

const port = process.env.PORT || 3000

const listener = app.listen(port, () => {
    console.log(`Your app is listening on port ${listener.address().port}`)
})


//Personal Form Webhooks
app.use("/personal-form-webhook", personalFormRoute)