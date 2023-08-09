const connectToMongo = require("./db")
connectToMongo() 
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


<<<<<<< HEAD
const port = process.env.PORT || 5000
=======
const port = process.env.PORT || 3000
>>>>>>> 412e0cb6c27fccc511ab3c6937ab38c74118394c

app.use(express.json())

app.use('/api', require('./routes/contact'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
