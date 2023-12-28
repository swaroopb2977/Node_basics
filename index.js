require('dotenv').config()
const express=require('express')
const app= express()
const port =3000

app.get('/',(req,res) =>{
    res.send('hello world!!!!!!!')
}
)

app.get('/twitter',(req,res) =>{
    res.send('swaroopdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at this website </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>This is YT</h2>')
})
app.listen(process.env.PORT,() =>{
    console.log(`Example app listening on port ${port}`)
})