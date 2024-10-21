const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const usersRouter=require('./routes/users.routes')

const app=express()

// app.use that means it will work all over application

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use("/users",usersRouter)


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
// route not found error 
app.use((req,res,next)=>{
    res.status(404).json({
        message:"route not found"
    })
})

// server found error

app.use((err,req,res,next)=>{
    res.status(500).json({
     message:"Something is Broken"
    })
})

module.exports=app;
