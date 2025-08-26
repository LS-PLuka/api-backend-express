export const getByIdProductController = (req, res) => {
  const { id } = req.params
  res.json({message: `Produto ${id} encontrado com sucesso!`})
}
