import mongoose from "mongoose";

const url = "mongodb+srv://guptagautam7250_db_user:HDsPCnJbbTJ5IAlx@cluster0.xaq38cq.mongodb.net/";

const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("DataBase Connected Successfully!");
        process.exit(0);
    } catch (error) {
        console.error("DataBase Connection Error:");
        console.error(error);
        process.exit(1);
    }
}

connectDb();
