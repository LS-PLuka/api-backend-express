import express from 'express';

const router = express.Router();

// CRUD
router.post('/' , (req, res) => {
  const dados = req.body
  console.log(dados)

  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
})

router.get('/:id' , (req, res) => {
  const { id } = req.params
  res.json({message: `Usuário ${id} encontrado com sucesso!`})
})

router.put('/:id' , (req, res) => {
  const dados = req.body
  const { id } = req.params

  res.json({
    message: `Usuário ${id} atualizado com sucesso!`,
    profile: dados
  })
})

router.delete('/:id' , (req, res) => {
  const { id } = req.params
  res.json({message: `Usuário ${id} deletado com sucesso!`})
})

router.get('/', (req, res) => {
  res.json({message: 'Lista de usuários'})
})

// Exportando o Router
export default router;
