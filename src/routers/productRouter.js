import express from 'express';

const router = express.Router();

// CRUD
router.post('/' , (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
})

router.get('/:id' , (req, res) => {
  const { id } = req.params
  res.json({message: `Produto ${id} encontrado com sucesso!`})
})

router.put('/:id' , (req, res) => {
  const dados = req.body
  const { id } = req.params

  res.json({
    message: `Produto ${id} atualizado com sucesso!`,
    product: dados
  })
})

router.delete('/:id' , (req, res) => {
  const { id } = req.params
  res.json({message: `Produto ${id} deletado com sucesso!`})
})

router.get('/', (req, res) => {
  res.json({message: 'Lista de produtos'})
})

// Exportando o Router
export default router;
