const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
const userRoutes = require('./api/routes/user');
const calculateRoutes = require('./api/routes/calculate')
var passport = require("passport");


require('./api/auth/auth');

const dbclustername = 'Calculator'
const dbusername = `bevyuser`
const dbpassword = `bevypassword`

const mongourl = `mongodb+srv://${dbusername}:${dbpassword}@cluster0-nogpo.mongodb.net/${dbclustername}`

mongoose.connect(mongourl,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
mongoose.set('useCreateIndex', true)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


app.use(passport.initialize());



app.post("/secret", passport.authenticate('jwt', { session : false }), function(req, res){
   
    console.log("User",req.body.user);
    
    res.json({'message': "Success"});
  });


app.use('/users', userRoutes);
app.use('/calculate', calculateRoutes);


app.use((req, res, next) => {
    const error = new Error('Api not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;