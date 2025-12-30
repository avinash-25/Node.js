import express from 'express';
import fs from 'fs';
import { arr } from './db.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(arr);
})

// if (arr.length == 0)
//     return res.status(404).json({
//         success: false,
//         message: "No users found"
//     }) //? if return is not present then we will get an error

app.get("/form", (req, res) => {
    let data = fs.createReadStream("./register.html", "utf-8").pipe(res);
})



app.post("/add", (req, res) => {
    console.log(req.body);
    let userData = req.body;

    arr.push(userData);
    res.status(201).json({
        success: true,
        message: "Registered successfully"
    })
})


app.get("/user/:id", (req, res) => {
    let id = Number(req.params.id);

    const user = arr.find((user) => user.id === id);
    
    if (!user) res.status(404).send("User Not Found");

    console.log(user);
    res.send(user);
})



app.listen(9000, (err) => {
    if (err) console.log("Error : ", err);
    console.log("Server is running");
})

//? using form-enode : we can send only alpphabaets 
//? using form :  we can send text as well as media alos like media and pdf.