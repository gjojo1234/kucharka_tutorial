const express = require('express');
const material = require('../../models/material');
const getMaterial = express.Router().get('/getmaterial', (req, res) => {
    material.find((err,docs) => {
        if(err){
            return res.json({
                msg: "nenašiel sa žiadny materiál",
                documents: []
            }) 
        } else {
            return res.json({
                msg: "úspešne sa nám podarilo získať suroviny",
                documents: docs
            })
        }
    })
});

module.exports = getMaterial;