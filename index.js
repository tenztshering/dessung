const express = require('express');
const mongoose = require('mongoose');
const desuungRouter = require("./routes/desuung");
const app = express();

app.use(express.json()); //to get the detail from client in json function.
app.use(express.urlencoded({extended: true}));
app.use("/desuung", desuungRouter);

app.get("/desuung", (req, res) => {
    res.send('GET ALL');
    console.log("req.body");
})
app.get("/desuung/:id", (req, res) => {
    res.send('GET' + req.params.id);
});
app.post("/desuung", (req, res) => {
    console.log(req.body);
    res.send('POST');
    
});
app.put("/desuung/:id", (req, res) => {
    res.send('PUT');
});
app.delete("/desuung/:id", (req, res) => {
    res.send('DELETE');
});


const start = async () =>{
    const mongoURI = "mongodb://localhost:27017";

    try {
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true
        });
        
        app.listen(3000, () => console.log('Server started'));

    } catch (error) {
        console.log("Error starting server", error)
        
    }

    
};

start();

