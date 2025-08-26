export const deleteProductController = (req, res) => {
  const { id } = req.params
  res.json({message: `Produto ${id} deletado com sucesso!`})
}
