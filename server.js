const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// app.get("/",function(req,res){
//     res.send("<h1>Hello World</h1>")

// })

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

})


app.post('/',function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sel = req.body.sel;
    console.log("Number 1 :",num1);
    console.log("Number 2 :",num2);
    console.log("Result : ",num1+num2)
    console.log("Selection is : ",sel)
    if(sel=='+'){
        var result = num1+num2;
        res.send("<h1>Result is "+ result +"</h1>")
    }
    if(sel=='-'){
        var result = num1-num2;
        res.send("<h1>Result is "+ result +"</h1>")
    }
    if(sel=='*'){
        var result = num1*num2;
        res.send("<h1>Result is "+ result +"</h1>")
    }
    if(sel=='/'){
        var result = num1/num2;
        res.send("<h1>Result is "+ result +"</h1>")
    }
    
  
})



// app.get("/about",function(req,res){
//     res.send("<h1>Muhammad Zubair Minhas</h1><p><h3>Full Stack Develeper<h3></p>")

// })

app.listen(3000,function(){
    console.log("Hello World")
});
