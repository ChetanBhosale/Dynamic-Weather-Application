const express = require('express')
const app = express()
const requests = require('requests')
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000


const templatePath = path.join(__dirname,'../template')
const partialPath = path.join(__dirname ,"../template/partials")
app.set("view engine","hbs")
app.set("views",templatePath)
hbs.registerPartials(partialPath
    
)
const staticPath = path.join(__dirname,"../public")

app.use(express.static(staticPath))
    

app.get("/",(req,res) =>{
    res.render('index')
})

app.get("/index",(req,res) =>{
    res.render('index')
})

app.get("/about",(req,res) =>{
    res.render('about')
})

app.get("/about/*",(req,res) =>{
    res.render('404error')
})

app.get("/weather",(req,res) =>{
    res.render('weather')
})

app.get("/weather/*",(req,res) =>{
    res.send('weather 404 error')
})


app.get("/*",(req,res) =>{
    res.send('main 404 error')
})


app.listen(port,()=>{
    console.log('Server created!')
})