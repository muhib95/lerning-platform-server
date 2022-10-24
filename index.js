const express = require('express')

const cors = require('cors')
const catagories=require('./data/catagory.json')
const modules=require('./data/modules.json')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Heuyyllo World!')
})
app.get('/catagories',(req,res)=>{
  res.send(catagories)
})
app.get('/catagories/:id',(req,res)=>{
  const id=req.params.id;
  const module=modules.find(m=>m.cid==id)
  res.send(module)
})
app.get('/modules',(req,res)=>{
  res.send(modules)

})
app.get('/modules/:id',(req,res)=>{
  const id=req.params.id;
  const module=modules.find(m=>m.id==id)
  res.send(module)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})