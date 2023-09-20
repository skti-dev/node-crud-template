const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.send('CRUD NodeJS')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Servidor rodando na porta: ', PORT)
})

app.use('/api', routes)
