const saveMaterial = require('express').Router();
const modelMaterial = require("../../models/material");

saveMaterial.post('/savematerial', (req, res) => {
    const {name} = req.body;
    const surovina = new modelMaterial({
        name: name
    });
    surovina.save((err, document) => {
        if(err){
            return res.json
            ({msg: "neúspešné uloženie suroviny"})
        } else {
            return res.json
            ({msg: `úspešné uloženie suroviny ${JSON.stringify(document)}`})
        }
    });
    
})

saveMaterial.get('/savematerial', (req, res) => {
    res.send("dostal som to getom");
})

module.exports = saveMaterial;