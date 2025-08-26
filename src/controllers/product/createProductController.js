export const createProductController = (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
}
