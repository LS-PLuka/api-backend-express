export const createUserController = (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
}
