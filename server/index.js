const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()

const port  = 5000

const user = 'adrianosotostesteovermind@gmail.com'
const pass = 'Teste@1234'

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/send', function (req, res) {
  const { name, email, phone, password, passwordConfirmation } = req.body

  if (!name || !email || !phone || !password || !passwordConfirmation) {
    res.status(400).send({
      success: false,
      message: 'Missing required fields'
    })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false
    }
  })

  const output = `
    <p>Novo usuário inscrito!</p>
    <ul>
      <li>Nome: ${name}</li>
      <li>Email: ${email}</li>
      <li>Telefone: ${phone}</li>
      <li>Senha: ${password}</li>
      <li>Confirmação de senha: ${passwordConfirmation}</li>
    </ul>
  `

  transporter.sendMail({
    from: user,
    to: 'sotos.adriano@gmail.com',
    subject: 'Novo usuário cadastrado',
    html: output
  }).then(info => {
    res.send(info)
  }).catch(error => {
    res.send(error)
  })
})

app.listen(port, function () {
  console.log(`Running on port ${port}`)
})