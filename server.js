const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const getMaterial = require('./routes/GET/getMaterial');

//pripojenie na databazu
dotenv.config();
const client = new MongoClient(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// routy GET
app.use('/', getMaterial);

// pripojenie na localserver
app.get('/', (req, res) => {
    res.send("si na hlavnej stránke")
});

app.listen(PORT, (err) => {
    console.log(`server bezi na ${PORT}!`)
})