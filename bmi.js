const express = require("express");
const bodyParser = require("body-parser");

const app = express();
 //app is a function that is used to bind the module express
app.use(bodyParser.urlencoded({extended:true}));

 app.get("/",function(req,res){
    res.sendFile(__dirname+"/indexbmi.html");
 });
 
 app.post("/",function(req,res){
    
   

    var n1=parseFloat(req.body.num1) ;
    var n2=parseFloat(req.body.num2) ;
    var result=n1/(n2*n2);
   
    res.send("Thanks for posting that.<br> The BMI is: "+result+"<br> A healthy BMI falls in the range of 18.5 to 24.9.<br>"+"If your BMI is in the range of 25.0 to 29.9,you fall in the overweught range.<br> Anything higher than 30 falls in the obese region.<br>"
    );
 });

app.listen(3020,function(){
    console.log("Server is running on port 3020");
});