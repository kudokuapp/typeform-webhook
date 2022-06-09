const dotenv = require('dotenv')
dotenv.config()
const Pool = require("pg").Pool
const fs = require("fs")

//database credentials
const { DB_USERNAME: dbUser,
        DB_PASSWORD: dbPassword,
        DB_HOST: dbHost,
        DB_PORT: dbPort,
        DB_DATABASE: dbDatabase } = process.env

//Initialize database
const pool = new Pool({
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbDatabase,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(`./secure/ca-certificate.crt`).toString(),
    },
})



const dbQueryUsersData = (firstName, lastName, email, wa) => {

  const today = new Date()
  const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  const queryString = `INSERT INTO users_data (firstname, lastname, email, whatsapp, registerdate) VALUES ($1, $2, $3, $4, $5)`

  const arr = [firstName, lastName, email, wa, todayDate]

  pool.query (queryString, arr, 
    (err) => {
      if (err) { console.error(err) }
    })
}

const dbQueryUsersAnswers = (firstName, lastName, email, wa) => {

  const today = new Date()
  const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  const queryString = `INSERT INTO users_data (firstname, lastname, email, whatsapp, registerdate) VALUES ($1, $2, $3, $4, $5)`

  const arr = [firstName, lastName, email, wa, todayDate]

  pool.query (queryString, arr, 
    (err) => {
      if (err) { console.error(err) }
    })
}

module.exports = {dbQueryUsersData, dbQueryUsersAnswers}