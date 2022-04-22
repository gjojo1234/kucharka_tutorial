const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const heslo = process.env.DB_CONNECT;
const mongoPath = `mongodb+srv://gjojo:${heslo}@cluster0.6twjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}