var app = require('express')();
var cors = require('cors');
var bodypaser = require('body-parser');
var route = require('./routes/routes');
app.use(cors());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodypaser.json());

app.use('/',route);
app.listen('3000',function(){
    console.log('in 3000');
});