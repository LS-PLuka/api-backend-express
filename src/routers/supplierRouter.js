import express from 'express';

const router = express.Router();

// CRUD
router.post('/', (req, res) => {
    const dados = req.body;
    console.log(dados);

    res.json({
        message: 'Fornecedor criado com sucesso!',
        supplier: dados
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fornecedor ${id} encontrado com sucesso!` });
})

router.put('/:id', (req, res) => {
    const dados = req.body;
    const { id } = req.params;

    res.json({
        message: `Fornecedor ${id} atualizado com sucesso!`,
        supplier: dados
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fornecedor ${id} deletado com sucesso!` });
})

router.get('/', (req, res) => {
    res.json({ message: 'Lista de fornecedores' });
})

// Exportando o Router
export default router;
