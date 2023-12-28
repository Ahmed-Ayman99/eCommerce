import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI.replace(
        "<PASSWORD>",
        process.env.MONGODB_PASSWORD
      )
    );
    console.log(`MongoDB Connected`, conn.connection.host);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;