export const createSupplierController = (req, res) => {
    const dados = req.body;
    console.log(dados);

    res.json({
        message: 'Fornecedor criado com sucesso!',
        supplier: dados
    })
}
