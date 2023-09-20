const mongoose = require('mongoose')
const uri = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.qcwtc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)

mongoose.connection.on('connected', () => {
  console.log('Conexão estabelecida')
})

mongoose.connection.error('error', err => {
  console.log('Erro na conexão com o MongoDB', err)
})
