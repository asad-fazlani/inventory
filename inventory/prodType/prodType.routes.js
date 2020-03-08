var app = require('express').Router();
var ptobj = require('./prodType');
app.get('/prodType',ptobj.getAll);
app.post('/add',ptobj.add);
// app.post('/add',ptobj.add);
app.put('/update/:ptid',ptobj.update);
app.delete('/delete/:ptid',ptobj.delete);
module.exports = app;