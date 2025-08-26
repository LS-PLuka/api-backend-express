export const editUserController = (req, res) => {
  const dados = req.body
  const { id } = req.params

  res.json({
    message: `Usuário ${id} atualizado com sucesso!`,
    profile: dados
  })
}
