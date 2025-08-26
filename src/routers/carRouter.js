// ARQUIVO PARA DESAFIO EM AULA
import express from 'express';

const router = express.Router();

// CRUD
router.post('/', (req, res) => {
    const dados = req.body;
    console.log(dados);

    res.json({
        message: 'Carro criado com sucesso!',
        car: dados
    });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Carro ${id} encontrado com sucesso!` });
})

router.put('/:id', (req, res) => {
    const dados = req.body;
    const { id } = req.params;
    const marca = dados.marca;
    const modelo = dados.modelo;

    res.json({
        message: `${marca} ${modelo} com ${id} atualizado com sucesso!`,
        modelo: modelo,
        marca: marca
    });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Carro ${id} deletado com sucesso!` });
})

router.get('/', (req, res) => {
    res.json({ message: 'Lista de carros' });
})

// Exportando o Router
export default router;
