var express=require("express");
var bodyparser=require("body-parser");


var app=express();
app.use(bodyparser());

var people=[
    {"id":1001,"pname":"Ashok","gender":"Male","age":20},
    {"id":1002,"pname":"Ashoka","gender":"feMale","age":20},
    {"id":1003,"pname":"Ashoku","gender":"Male","age":20},

];
app.get('/people',function(req,res){
    res.send(people);
});
app.get('/:name',function(req,res){
    var name=req.params.name;
    var msg=`hello ${name}`;
    res.send(msg);
});
app.get("/person/details/:id",function(req,res){
    var id=Number(req.params.id);
    var person=people.find(x=>x.id==id);
    res.send(person);
});
app.post('/',function(req,res){
    people.push(req.body);
    res.send(req.body);
});
app.put('/',function(req,res){
    var id=Number(req.params.id);
    var person=people.find(x=>x.id==id);
    person.put(req.body);
    res.send(req.body)
});
// app.get('/',function(req,res){
//     res.send("hello");
// });

// app.get("/wishes",function(req,res){
//     var hour=new Date().getHours();
//     if(hour<12) res.send("GM");
//     else if(hour<16) res.send("Good Afternoon");
//     else res.send("GE");
// })


app.listen(9001,function(){
    console.log("Api is listening..");
});