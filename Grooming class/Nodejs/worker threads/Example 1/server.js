import express from 'express';

const app = express();

app.get("/blocking", (req, res) => {
    let startTime = Date.now();
    let count = 0;

    for (let i = 0; i < 1000000000000000; i++){
        count++;
    }
    res.status(200).json({
        status: true,
        message: "loop executing",
        time: (Date.now() - startTime) / 1000
    })
})  

app.get("/non-blocking", (req, res) => {
    let startTime = Date.now();

    res.status(200).json({
        status: true,
        message: "loop executing",
        time: (Date.now() - startTime) / 1000
    })
})


app.listen(9000, () => {
    console.log("Server started at 9000")
})