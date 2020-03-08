var con = require('../ab/ab');

var ptobj = {
    getAll : function(req,res){
        var query ="select * from prodType";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    var q ="insert into prodType (ptname) values(?)";
    var u = req.body;
    console.log("hii111",u.ptid);
   
    var values =[u.ptname];
    con.query(q,values,function(err,rows){
        if (err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    }
    );
},

delete :function (req, res) {
    var q ="DELETE FROM ProdType where ptid = ?";
    var u = req.params;
    console.log("here");
  //   console.log(req);
    console.log(req.params);
    var values =[u.ptid];
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });
  },

  update : function(req,res){
  
    var q ="update ProdType SET ptname=? where ptid = ?";
    var u = req.body;
    //  var cid = req.params.cid;
    console.log("update");
    var values =[u.ptname,u.ptid];
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
module.exports = ptobj;