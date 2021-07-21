const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./models') //index 생략 가능
const {Comment} = require('./models')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
db.sequelize.sync() // sync() 결과값 : Promise 객체 
.then(()=>{console.log('DB접속 성공')})
.catch((e)=>{console.log(`DB접속 실패! 에러 -> ${e} `)})

app.use('/api',routes)

// app.get('/', async (req,res, next)=>{
//     console.log(Comment)
//     try{
//         const data = await Comment.findAll({})
//         res.json(data)
//     }catch(e){
//         console.error(e)
//         next(e)
//     }
// })


// app.post('/', async(req,res, next)=>{
//     const {userid,content} = req.body;
//     console.log(userid,content)
//     try{
//         const data = await Comment.create({
//             userid,content
//         })
//         res.json(data)
//     }catch(e){
//         console.error(e)
//         next(e)
//     }
// })

// app.patch('/:id', async(req,res, next)=>{
//     const {id} = req.params;
//     const {content} = req.body;
//     try{
//         const data = await Comment.update({
//             content
//         },{
//             where:{id}
//         })
//         // 수정된 곳이 있으면 ? A 없다면  : B 

//         console.log(data)   // [ 1 ]
//         console.log(data[0])   // 1
//         const result = data[0] >= 1 
//         ? {result:'SUCCESS', msg:'댓글이 수정되었습니다.', count:data[0]}
//         : {result:'ERROR', msg:'서버 오류가 발생되었습니다.', count:data[0]}

//         res.json(result)
//     }catch(e){
//         console.error(e)
//         next(e)
//     }
// })


// app.delete('/:id', async (req,res, next)=>{
//     const {id} = req.params;
//     try{
//         const data = await Comment.destroy({
//             where:{id}
//         })
//         console.log(data)
//         const result = data>=1
//         ? {result:'SUCCESS', msg:'댓글이 삭제되었습니다.', }
//         : {result:'ERROR', msg:'서버 오류가 발생되었습니다.'}
//         res.json(result)
//     }catch(e){
//         console.error(e)
//         next(e)
//     }
// })



app.listen(3001,()=>{
    console.log('post test')
    console.log(`server start port: 3001`)
}) 