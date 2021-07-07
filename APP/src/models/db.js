const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongo_URI = process.env.mongo_URI;

mongoose
.connect(mongo_URI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(console.err);

const userSchema = mongoose.Schema({
    id: {
        type: String,
        length: 20
    },

    name: {
        type: String,
        maxlength: 30
    },

    description: {
        type: String,
        maxlength: 50
    }
})

const User = mongoose.model('User', userSchema);

module.exports = mongoose;
module.exports = {User};