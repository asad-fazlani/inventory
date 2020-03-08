var app = require('express').Router();
var uobj = require('./users');
app.get('/users',uobj.getAll);
app.post('/add',uobj.add);
app.put('/update/:uid',uobj.update);
app.delete('/delete/:uid',uobj.delete);
// app.get('/users/:uid',uobj.getbyId);
// app.get('/users/:uemail',uobj.getbyMial);
module.exports = app;