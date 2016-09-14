/**
 * Created by ChunQhai on 5/13/16.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/books');

var Book = require('./models/bookModel');

var app = express();

// First way to get PORT
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes.js')(Book);


bookRouter.route('/Books/:bookId');


app.use('/api/books', bookRouter);

// app.use('/api/author', authorRouter);



app.get('/', function(req, res){
   res.send('Welcome to my API!!');
});

app.listen(port, function(){
    console.log("Running on PORT: "+ port);
});