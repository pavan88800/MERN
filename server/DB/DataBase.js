const mongoose = require('mongoose')

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MogoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Database connection established successfully')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = ConnectDb
