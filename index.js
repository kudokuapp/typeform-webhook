const express = require("express")
const app = express()
app.use(express.raw({ type: "application/json" }))

const PersonalDataRoute = require('./routes/PersonalData')
const ResearchFormRoute = require('./routes/ResearchForm')

const port = process.env.PORT || 8080

const listener = app.listen(port, () => {
    console.log(`Your app is listening on port ${listener.address().port}`)
})

app.get("/", (req, res) => {
    res.send("it's live!")
})

//Personal Form Webhooks
app.use("/personal-data-webhook", PersonalDataRoute)

//Research Form Webhooks
app.use("/research-form-webhook", ResearchFormRoute)