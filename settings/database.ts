import mongoose from "mongoose";
import { EnvVariables } from "./env";

class Database {
    constructor() { }

    async connection() {
        try {
            await mongoose.connect(EnvVariables.DB_HOST);
            console.log('database connection success');
        } catch (err) {
            throw err;
        }
    }
}

const database = new Database();
export default database;