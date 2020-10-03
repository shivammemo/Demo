let express = require('express');
let bodyParser = require('body-parser');
let app = express()
let connectDb = require('./database/db');
let userRoute = require('./routes/user.route')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//========DB Connection==========
connectDb();

//===========Routes============
app.get("/", (req, res) =>{
    res.send("Welcome to NodeJS!!")
})

app.use('/users', userRoute)

app.listen(4000, () =>{
    console.log("Server Connected at 4000...");
})