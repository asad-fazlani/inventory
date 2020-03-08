var con = require('../ab/ab');

var uobj = {
    getAll : function(req,res){
        var query ="select * from user";
        con.query(query,function(err,row){
            if(err){
        
        res.send(err);
    }
    res.send(row);
    });
},

add : function(req,res){
    console.log("In add");
    var q ="insert into user(uemail,umobile,upassword) values(?,?,?)";
    var u = req.body;
    console.log(u);
    console.log("i am here")
    var values =[u.uemail,u.umobile,u.upassword];
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
  
    var q ="update user SET uemail=?,umobile=?,upassword=? where uid = ?";
    var u = req.body;
    // var uid = req.params.uid;
    console.log("update");
    var values =[u.uemail,u.umobile,u.upassword,u.uid];
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
  var q ="DELETE FROM user where uid = ?";
  var u = req.params;
  console.log("here");
//   console.log(req);
  console.log(req.params);
  var values =[u.uid];
  con.query(q,values,function(err,rows){
      if(err){
          res.send(err);
      }
      console.log(rows);
      res.send(rows);
  });
},

 getbyId:function (req, res) {
    var q ="select * FROM user where uid = ?";
    var u = req.params;
   var values =[u.uid];
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });  

},
getbyMial:function (req, res) {
    var q ="select * FROM user where uemail = ?";
    var u = req.params;
    var values =[u.uemail];
    con.query(q,values,function(err,rows){
        if(err){
            res.send(err);
        }
        console.log(rows);
        res.send(rows);
    });  

}
}

module.exports = uobj;