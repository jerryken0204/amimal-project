const express = require('express');
//npm install body-parser for post request
const bodyParser = require('body-parser');

const router =require('./router.js');
const app = express();

//open the static assets
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));

//setting for art-template
app.engine('html',require('express-art-template'));

//setting for body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);


app.listen(3000,()=>{
    console.log('server is starting');
})