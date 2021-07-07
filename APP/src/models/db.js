const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://jisu:201916022@todolist.uivgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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