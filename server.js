const express=require('express')
var app=express()


app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/',(req,res)=> {
    var name=req.name;
    var age=req.age;

    res.send(`Name is ${name} and age is ${age}`)
})


app.listen(8080,()=> {
    console.log('server has started')
})