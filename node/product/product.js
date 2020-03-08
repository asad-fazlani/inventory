var con = require('../ab/ab');

var pobj = {
    getAll : function(req,res){
        
        var query ="select * from product";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    var q ="insert into product (pname,pcompany_id,ptype_id) values (?,?,?)";
    var u = req.body;
    var values =[u.pname,u.pcompany_id,u.ptype_id];
    // console.log(u.pid,u.pname,u.pcompany_id,u.ptype_id);
    con.query(q,values,function(err,rows){
        if (err){
        
            res.send(err );
        }
        console.log(rows);
    
        res.send(rows);
    }    );
},

delete :function (req, res) {
    console.log("here");
    var q ="DELETE FROM product where pid = ?";
    var u = req.params;
    
    console.log(req.params);
    var values =[u.pid];
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });
  },
  update : function(req,res){
  
    var q ="update product SET pname=?,pcompany_id=?,ptype_id=? where pid = ?";
    var u = req.body;
     var values =[u.pname,u.pid,u.pcompany_id,u.ptype_id];
    console.log(values)
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });
  },




}
module.exports = pobj;