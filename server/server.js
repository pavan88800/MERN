const express = require('express')
const app = express()
const ConnectDb = require('./DB/DataBase')
const Port = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config()
// DataBase Connection

// bodyPraser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

ConnectDb()
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

// routers
app.use('/api/users', require('./routes/userRoutes'))

app.listen(Port, () => {
  console.log(`Serevr is Runing on ${Port}`)
})
