var app = require('express').Router();
var pdobj = require('./prodDetails');
app.get('/prodDetails',pdobj.getAll);
app.post('/add',pdobj.add);
module.exports = app;