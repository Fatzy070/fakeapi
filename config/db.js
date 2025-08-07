const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongodb successfully')
    } catch (error) {
        console.error('Database connection failed:' , error)
        process.exit(1)
    }
}

module.exports = connectDB