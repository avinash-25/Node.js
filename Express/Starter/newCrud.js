import express from 'express';
import { arr } from './db.js';

const app = express();

app.use(express.urlencoded({ extended: true }));


//& check server
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Hello"
    })
})

//& Get all users
app.get("/users", (req, res) => {
    res.send(arr);
})


//& Add user
app.post("/register", (req, res) => {
    const user = req.body;

    arr.push(user);
    res.status(201).json({
        success: true,
        message: "Registered successfully"
    })
})

//& get one user
app.get("/one/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = arr.find((user) => id === user.id);
    console.log(id);

    res.status(200).json({
        success: true,
        message: "user fetched successfully",
        data: user
    })
})


//& delete one user
app.delete("/one/delete/:id", (req, res) => {
  let userId = req.params.id;

  let idx = arr.findIndex((user) => user.id === parseInt(userId));

  if (idx !== -1) {
    arr.splice(idx, 1);

    return res.status(200).json({
      success: true,
      message: "user deleted",
      data: arr,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
});

//& update user details
app.patch("/update", (req, res) => {
  
})

//
app.listen(9000, () => {
    console.log("Server started at 9000")
})