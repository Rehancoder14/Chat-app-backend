const mongoose = require('mongoose');


const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
           
           
            connectTimeoutMS: 30000, // Adjust as needed
            socketTimeoutMS: 30000, // Adjust as needed
          });
        console.log(" Database connected: " , connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }
}

module.exports = connectDb;