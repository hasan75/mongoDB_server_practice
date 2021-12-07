const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;

app.get('/',(req,res)=>{
    res.send('Hello From Node')
})
const users = [
    {id:1, name:'Shabana', phone: '01716233854'},
    {id:2, name:'Kuddus', phone: '01716233854'},
    {id:3, name:'Akkas', phone: '01716233854'},
    {id:4, name:'Kamalika', phone: '01716233854'},
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
app.get('/fruits',(req,res)=>{
    res.send(['Mangoes','banana','Apple'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Fazli Miya Tok Marka')
})

app.listen(port,()=>{
    console.log('Server is running on port: ',port);
})
