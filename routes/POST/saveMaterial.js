const saveMaterial = require('express').Router();
const modelMaterial = require("../../models/material");

saveMaterial.post('/savematerial', (req, res) => {
    const surovina = new modelMaterial({
        name:req.body.name
    });
    surovina.save();
    res.send("dostal som to postom");
})

saveMaterial.get('/savematerial', (req, res) => {
    res.send("dostal som to getom");
})

module.exports = saveMaterial;