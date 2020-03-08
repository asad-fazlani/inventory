    var app = require('express').Router();
    var uroutes = require('../users/users.routes');
    app.use('/users',uroutes);
    var proutes = require('../product/product.routes');
    app.use('/product',proutes);
    var croutes = require('../company/company.routes');
    app.use('/company',croutes);
    var ptroutes = require('../prodType/prodType.routes');
    app.use('/prodType',ptroutes);
    var pdroutes = require('../prodDetails/prodDetails.routes');
    app.use('/prodDetails',pdroutes);
    var oroutes = require('../orders/orders.routes');
    app.use('/orders',oroutes);



    module.exports=app;