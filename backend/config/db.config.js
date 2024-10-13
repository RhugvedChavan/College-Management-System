import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const connectionIns = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database is connected successfully HOST: ${connectionIns.connection.host}`);
    } catch (error) {
        console.log("Failed to connect database: ", error);
        process.exit(1)
    }
}

export default connectToDb;