const connectToMongo = require("./db")
connectToMongo() 
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


<<<<<<< HEAD
=======

>>>>>>> 842aa5adadb10779b3f0a48a8d6be1bac4dcc1e6
const port = process.env.PORT || 5000


app.use(express.json())

app.use('/api', require('./routes/contact'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
