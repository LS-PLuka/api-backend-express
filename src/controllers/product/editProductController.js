export const editProductController = (req, res) => {
  const dados = req.body
  const { id } = req.params

  res.json({
    message: `Produto ${id} atualizado com sucesso!`,
    product: dados
  })
}
