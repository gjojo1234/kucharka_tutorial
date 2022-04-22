const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongo = require('./database/mongo');
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const getMaterial = require('./routes/GET/getMaterial');
const saveMaterial = require("./routes/POST/saveMaterial");


//pripojenie na databazu
const connectToMongoDB = async () => {
  await mongo().then( async(mongoose) => {
    try {console.log("connected to mongodb")}
    catch{console.log('nepripojene do db')}
    //finally {mongoose.connection.close()}
  })
}
connectToMongoDB();

/*
dotenv.config();
const client = new MongoClient(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

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