import mongoose from "mongoose";

async function dbConnection() {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Conectado ao: ${db.connection.name}`)
    } catch (err) {
        console.log(err);
    }
}

export { dbConnection };