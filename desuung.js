const express = require('express');
const desuungModel = require('../model/dessung');
const app = express.Router();
const Desuung = require("../model/dessung");

app.get("/", async(req, res) => {

    try {
        const allDesuups = await Desuung.find ();
        res.send(allDesuups)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Error getting dessups")
    }
})


app.get("/:id", (req, res) => {
    res.send('GET' + req.params.id);
});


app.post("/", async (req, res) => {
    console.log(req.body);
    const desuung = new Desuung(req.body);

    try {
        const newDesuung = await desuung.save()
        res.send(newDesuung)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Error creating desuup");
    } 
});


app.put("/:id", (req, res) => {
    res.send('PUT');
});


app.delete("/:id", async(req, res) => {
    const desuung = new Desuung(req.body);

    try {
        const newDesuung = await desuung.delete()
        res.send(newDesuung)
    } catch (error) {
        console.log("Error", error)
        res.status(500).send("Error deleting desuup");
    }
});



module.exports = app;