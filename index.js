const express = require('express')

const cors = require('cors')
const catagories=require('./data/catagory.json')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Heuyyllo World!')
})
app.get('/catagories',(req,res)=>{
  res.send(catagories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})