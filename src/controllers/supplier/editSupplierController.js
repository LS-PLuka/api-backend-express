export const editSupplierController = (req, res) => {
    const dados = req.body;
    const { id } = req.params;

    res.json({
        message: `Fornecedor ${id} atualizado com sucesso!`,
        supplier: dados
    })
}
