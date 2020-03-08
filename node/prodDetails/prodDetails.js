var con = require('../ab/ab');

var pdobj = {
    getAll : function(req,res){
        var query ="select * from prodDetails";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    var q ="insert into prodDetails(id,cost,discount,prod_id) values(?,?,?,?)";
    var u = req.body;
    console.log(u);
    console.log("hiii")
    var values =[u.id,u.cost,u.discount,u.prod_id];
    con.query(q,values,function(err,rows){
        if (err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    }
    );
}}
module.exports = pdobj;