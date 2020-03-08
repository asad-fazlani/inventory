var con = require('../ab/ab');

var cobj = {
    getAll : function(req,res){
        var query ="select * from company";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    var q ="insert into company (cname) values(?)";
    var u = req.body;
    console.log(u);
    console.log("hiii")
    var values =[u.cname];
    con.query(q,values,function(err,rows){
        if (err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    }
    );
},
update : function(req,res){
  
    var q ="update company SET cname=? where cid = ?";
    var u = req.body;
    //  var cid = req.params.cid;
    console.log("update");
    var values =[u.cname,u.cid];
    console.log(values)
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });
  },
  delete:function (req, res) {
    var q ="DELETE FROM company where cid = ?";
    var u = req.params;
    console.log("here");
    console.log(req.params);
    var values =[u.cid];
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });
  }

}
module.exports = cobj;

