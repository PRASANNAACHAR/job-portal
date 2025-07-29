import mongoose from "mongoose";

// connect to the mongodb database
const connectDB = async ()=> {
    mongoose.connection.on('connected', ()=> console.log('Databse Connected'));

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB