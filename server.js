const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models') //index 생략 가능
const {Comment} = require('./models')
const routes = require('./routes')
const cors=require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
db.sequelize.sync() // sync() 결과값 : Promise 객체 
.then(()=>{console.log('DB접속 성공')})
.catch((e)=>{console.log(`DB접속 실패! 에러 -> ${e} `)})

app.use('/api',routes)



app.listen(3000,()=>{
    console.log('post test')
    console.log(`server start port: 3000`)
}) 