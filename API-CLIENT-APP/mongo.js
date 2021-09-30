var mongodb = require("mongodb");
var mongoDbClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/EmployeeDB";
// mongoDbClient.connect(url,function(err,db){
//     if ( !err )
//         console.log("Connection established successfully...");
//     else    
//         console.log("Error: "+err);
// });

//var MongoClient=require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/EmployeeDB",function(err,db){

// var collection=db.collection("tblEmployees");

// var cursor=collection.find();
// cursor.each(function(err,doc){
//     console.log(doc);
// })
// })


var express=require("express");
var app=express();
var MongoClient=require('mongodb').MongoClient;
const Db = require("mongodb/lib/db");
app.get('/employees',function(req,res){
    MongoClient.connect("mongodb://localhost:27017/EmployeeDB",function(err,db){
    db.collection('tblEmployees').find().toArray(function(err,docs){
    res.send(docs);
});
});
});
app.get('/employees/:id',function(req,res){
    var id=Number(req.params.id);
    MongoClient.connect("mongodb://localhost:27017/EmployeeDB",function(err,db){
    var collection=tb.collection
    db.collection('tblEmployees').find().toArray(function(err,docs){
    res.send(docs);
});
});
});

//Add row to mgodb server directly
// var e1={"_id":1009,"ename":"Ravci","course":"Clerk","fee":2300};
// MongoClient.connect("mongodb://localhost:27017/EmployeeDB",function(err,db){
//    db.collection('tblEmployees').insertOne(e1,function(err,docs){
//      if(!err)
//      console.log("Row added");
//      else console.log("Error" +err)
//  });
//  });
// app.get('/',function(req,res){
//     res.send("hello");
// });


//Web API code to add row into db
//not working
// app.post('/',function(req,res){
//     MongoClient.connect("mongodb://localhost:27017/EmployeeDB",function(err,db){
//          db.collection('tblEmployees').insertOne(req.body,function(err,docs){
//          console.log(docs);
//          if(!err)
//         console.log("Row added");
//         else console.log("Error" +err)
//         });
//     });
// });

// var dbClient=mongodb.MongoClient;
// dbClient.connect(url,function(err,db){
//     if(!err){
//         var collection=db.collection('tblEmployees');
//         collection.update({"_id":1001},{$set:{ename:"Ravi Kumar"}})
//         console.log("rOW UPDATED");
//         db.close();
//     }else console.log("error" +err);

// });
// app.put('/employees/update/:id',function(req,resp){
//     var e1 = req.body;
//     var id  =Number( req.params.id);
//     MongoClient.connect("mongodb://localhost:27017/EmployeeDB", function(err, db) {   
      
//     var collection = db.collection("tblEmployees");        
//         collection.update({"_id":id},{$set:{ename:e1.ename, job:e1.job, salary:e1.salary }})  ;
//     db.close();
//     resp.send("Row updated sucessfully...");
      
//   })
//   });
//   app.delete('/employees/delete/:id',function(req,resp){
//     var id  =Number( req.params.id);
//       MongoClient.connect("mongodb://localhost:27017/EmployeeDB", function(err, db) {   
  
//     var collection = db.collection("tblEmployees");        
//           collection.remove({"_id":id});    
//       db.close();
//     resp.send("row deleted successfully...");
//     })
  
//     });
app.listen(9003,function(){
    console.log("Web API with mongo")
});
