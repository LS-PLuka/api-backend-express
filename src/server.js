import express from 'express'

const app = express()
const port = 5000

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.post('/user' , (req, res) => {
  res.json({message: 'Usuário criado com sucesso!'})
})

app.put('/user' , (req, res) => {
  res.json({message: 'Usuário atualizado com sucesso!'})
})

app.delete('/user' , (req, res) => {
  res.json({message: 'Usuário deletado com sucesso!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
