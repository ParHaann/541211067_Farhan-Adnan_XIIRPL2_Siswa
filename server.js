const express = require('express')
const app = express()
const userrouter = require('./router/siswa')
const port = 2000
const connectDB = require('./config/db')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})