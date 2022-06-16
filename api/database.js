const dotenv = require('dotenv')
dotenv.config()
const fs = require('fs')
const Pool = require("pg").Pool

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

const getTodayDate = () => {
  const today = new Date()
  const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  return todayDate
}


const dbQueryUsersData = (firstName, lastName, age, gender, email, wa) => {

  const todayDate = getTodayDate()

  const queryString = `INSERT INTO users_data (firstname, lastname, age, gender, email, whatsapp, registerdate) VALUES ($1, $2, $3, $4, $5, $6, $7)`

  const arr = [firstName, lastName, age, gender, email, wa, todayDate]

  return new Promise(function (resolve, reject){
    pool.query(queryString, arr, (err, res) => {
        if (err) {
            reject(0)
        }
    
        else {
            resolve(res.rows[0])
        }
      })
  })
}

const dbQueryUsersAnswers = (firstName, lastName, age, gender, occupation, email, wa, formToken) => {

  const todayDate = getTodayDate()

  const queryString = `INSERT INTO users_final (firstname, lastname, age, gender, occupation, email, whatsapp, form_response_token, registerdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`

  const arr = [firstName, lastName, age, gender, occupation, email, wa, formToken, todayDate]

  return new Promise(function (resolve, reject){
      pool.query(queryString, arr, (err, res) => {
          if (err) {
              reject(0)
          }
      
          else {
              resolve(res.rows[0])
          }
        })
    })
}

const dbQueryIfUsersExists = (email) => {

  const queryString = `SELECT * FROM users_final WHERE email=$1`

  const arr = [email]

  return new Promise(function (resolve, reject){
      pool.query(queryString, arr, (err, res) => {
          if (err) {
              reject(0)
          }
      
          else {
              resolve(res.rows[0])
          }
        })
    })
}

module.exports = { dbQueryUsersData, dbQueryUsersAnswers, dbQueryIfUsersExists }