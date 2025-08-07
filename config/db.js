const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/sample')
        console.log('connected to mongodb successfully')
    } catch (error) {
        console.error('Database connection failed:' , error)
        process.exit(1)
    }
}

module.exports = connectDB