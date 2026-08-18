const mongoose = require("mongoose"); // Import the mongoose library to interact with MongoDB

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) { 
    console.error(`Error connecting to MongoDB: ` , error);
    process.exit(1);
  }
};

module.exports = connectDB; // Export the connectDB function so it can be used in other parts of the application
