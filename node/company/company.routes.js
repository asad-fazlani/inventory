var app = require('express').Router();
var cobj = require('./company');
app.get('/company',cobj.getAll);
app.post('/add',cobj.add);
app.put('/update/:cid',cobj.update);
app.delete('/delete/:cid',cobj.delete);
module.exports = app;