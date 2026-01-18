import os from 'node:os';
import cluster from 'node:cluster';
import express from 'express';

const app = express();

// console.log(os.availableParallelism());

let cores = os.availableParallelism();

if (cluster.isPrimary) {
    console.log("Process Id : ",process.pid);
    for (let i = 0; i < cores; i++) {
        cluster.fork();
    }
    
} else {
    app.get("/me", (req, res) => {
        for (let i = 0 ; i < 100000; i++) {
            console.log(process.pid);
    }

        res.status(200).json({
            success: true,
            message: "Blocking"
        })
    
})


app.listen(9000, () => {
    console.log("Servers is running at 9000");
})
}