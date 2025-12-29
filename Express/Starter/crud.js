import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.urlencoded({ extended: true }));

let arr = [
    {   id:1,
        name: "Avinash",
        age: 23,
    },
    {   id:2,
        name: "Raju",
        age: 25,    
    },
    {   id:3,
        name: "Rakesh",
        age: 26,    
    }
]

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
    let id = req.params.id;

    let user = arr.find((user) => {
        id === user.id;
        console.log(user);
        res.send(user);
    })

})



app.listen(9000, (err) => {
    if (err) console.log("Error : ", err);
    console.log("Server is running");
})