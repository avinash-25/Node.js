import express from 'express';
import { connectDB } from './config/database.config.js';
import router from './routes/user.routes.js';

const app = express();

connectDB();

app.use(express.json());

app.use("/user", router);

app.listen(9000, () => {
    console.log("Server is running at 9000");
})



//? while using default script, in the terminal, run "npm scriptName"
//? while using custom script, in the terminal, run "npm run scriptName"

//? open cmd as admin, run "net start mongodb"