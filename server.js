const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models') //index 생략 가능


app.use(bodyParser.urlencoded({extended:false}))
db.sequelize.sync() // sync() 결과값 : Promise 객체 
.then(()=>{console.log('DB접속 성공')})
.catch((e)=>{console.log(`DB접속 실패! 에러 -> ${e} `)})

app.get('/', (req,res)=>{
    res.send('안녕 postman (get)')
})

app.post('/',(req,res)=>{
    res.json(req.body)
})

// app.post('/comment', (req,res)=>{
//    // 포스트맨으로 해보기 ! 
// })



app.listen(3001,()=>{
    console.log('post test')
    console.log(`server start port: 3001`)
}) 