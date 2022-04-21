const express = require('express');
const getMaterial = express.Router().get('/get-material', (req, res) => {
    res.json({
        msg: 'Úspešne som získal suroviny',
        zoznamSurovin: [
                {surovina: 'mrkva'},
                {surovina: 'cibuľa'},
                {surovina: 'zemiaky'}
        ]
    })
});

module.exports = getMaterial;