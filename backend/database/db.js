let mongoose = require('mongoose');
let URI = "mongodb://localhost/assignment_2";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("DB connected!!!")
}

module.exports = connectDB;