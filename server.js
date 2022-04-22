const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongo = require('./database/mongo');

const getMaterial = require('./routes/GET/getMaterial');
const saveMaterial = require("./routes/POST/saveMaterial");


//pripojenie na databazu
const connectToMongoDB = async () => {
  await mongo().then( async(mongoose) => {
    try {console.log("connected to mongodb")}
    catch{console.log('nepripojene do db')}
    
  })
}
connectToMongoDB();


//povolenie prijimania z frontendu (middleweare) - musi byt nad ostatnymi use

app.use(express.json({extended:false}));

// routy GET
app.use('/', getMaterial);

//routy POST
app.use('/', saveMaterial);

// pripojenie na localserver
app.get('/', (req, res) => {
    res.send("si na hlavnej stránke")
});

app.listen(PORT, (err) => {
    console.log(`server bezi na ${PORT}!`)
})