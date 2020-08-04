import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('Getting some things')
  return res.json("Hello World!")
})

app.listen(3333)