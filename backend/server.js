var express = require('express');
var morgan = require("morgan");
var mongoose = require('mongoose');
var dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require("cors");

dotenv.config();

var app = express();

mongoose.connect(process.env.MONGO_URI)
.then(db => console.log('db connected'))
.catch(err => console.log(err))

// mongoose.connection.on('open', function (ref) {
//     console.log('Connected to mongo server.');
//     //trying to get collection names
//     mongoose.connection.db.listCollections().toArray(function (err, names) {
//         console.log(names); // [{ name: 'dbname.myCollection' }]
//         //module.exports.Collection = names;
//     });
// })
// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())

// Import routes
const indexRoutes = require('./routes/indexRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Routes
app.use('/api', indexRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT,() =>{
    console.log(`Server running on port  ${process.env.PORT}`) 
} )