var con = require('../ab/ab');

var oobj = {
    getAll : function(req,res){
        var query ="select * from orders";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    var q ="insert into orders(id,prod_id,quantity,orderdate) values(?,?,?,?)";
    var u = req.body;
    console.log(u);
    console.log("hiii")
    var values =[u.id,u.prod_id,u.quantity,u.orderdate];
    con.query(q,values,function(err,rows){
        if (err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    }
    );
}}
module.exports = oobj;