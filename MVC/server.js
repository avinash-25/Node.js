import express from 'express';
import router from './router.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);


// server
app.listen(9000, () => {
    console.log("Server started at 9000")
})