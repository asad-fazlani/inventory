const mysql      = require('mysql');
 const con = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'inventory'
 });

 con.connect((err)=>{
     if(err){
         console.log('Error connecting to  ab');
         console.log(err);
         return;
     }
     console.log('Connection established');
 });
 module.exports= con;