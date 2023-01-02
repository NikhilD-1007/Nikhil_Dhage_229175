const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})

app.listen(7000,'0.0.0.0',()=>{
   console.log('Server started at port 7000');
})