export const getByIdUserController = (req, res) => {
  const { id } = req.params
  res.json({message: `Usuário ${id} encontrado com sucesso!`})
}
