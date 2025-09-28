import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
import { seedAdmin } from "./app/helpers/seedAdmin";

dotenv.config();

const PORT = 5000;

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.0c9fo.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDB Using Mongoose!!");
    // Create admin after DB connection
    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
