var app = require('express').Router();
var pobj = require('./product');
app.get('/product',pobj.getAll);
app.post('/add',pobj.add);
app.delete('/delete/:pid',pobj.delete)
app.put('/update/:pid',pobj.update)
module.exports = app;