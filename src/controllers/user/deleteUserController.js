export const deleteUserController = (req, res) => {
  const { id } = req.params
  res.json({message: `Usuário ${id} deletado com sucesso!`})
}
