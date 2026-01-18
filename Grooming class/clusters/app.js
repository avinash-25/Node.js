import express from 'express';

const app = express();

app.get("/me", (req, res) => {
    for (let i = 0; i < 100000; i++) {}

        res.status(200).json({
            success: true,
            message: "Blocking"
        })
    
})


app.listen(9000, () => {
    console.log("Servers is running at 9000");
})

//? autocannon  --> load testing
// autocannon http://localhost:9000/me -d 10 -c 100