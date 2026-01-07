import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected");
}


//   await mongoose.connect("mongodb://127.0.0.1:27017/user-portal");

// mongodb://localhost:27017 ==> default db test will be created
//! mongodb://localhost:27017/user-portal ==> "user-portal" is the database name
//? if the database is not present, the default test db will be created
//? if the database is present, it will connect to the existing database