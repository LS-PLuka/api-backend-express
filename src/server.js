import express from 'express'

const app = express()
const port = 5000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

// CRUD de Usuário
app.post('/user' , (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
})

app.get('/user' , (req, res) => {
  res.json({message: 'Usuário encontrado com sucesso!'})
})

app.put('/user' , (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Usuário atualizado com sucesso!',
    profile: dados
  })
})

app.delete('/user' , (req, res) => {
  res.json({message: 'Usuário deletado com sucesso!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
