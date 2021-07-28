const express = require('express')
const app = express()
const ConnectDb = require('./DB/DataBase')
var cors = require('cors')
app.use(cors())
const Port = process.env.PORT || 5000
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
dotenv.config()
// DataBase Connection

// bodyPraser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

ConnectDb()
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

// routers
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoute'))
app.listen(Port, () => {
  console.log(`Serevr is Runing on ${Port}`)
})
