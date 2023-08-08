const connectToMongo = require("./db")
connectToMongo() 
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api', require('./routes/contact'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
