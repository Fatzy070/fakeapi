const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(cors())
app.use(require('./routes/PageRoute'))

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})