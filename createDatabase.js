const mongoose = require('mongoose')
const subscriberModel = require('./src/models/subscribers')
const data = require('./src/data')
const dotenv = require("dotenv");

// configuration of env
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = 'mongodb://127.0.0.1:27017/subscribers';
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.insertMany(data);
    await subscriberModel.deleteMany({});
    await mongoose.disconnect();
}
refreshAll();