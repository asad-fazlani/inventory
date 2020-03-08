var app = require('express').Router();
var oobj = require('./orders');
app.get('/orders',oobj.getAll);
app.post('/add',oobj.add);
module.exports = app;