export const getByIdSupplierController = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fornecedor ${id} encontrado com sucesso!` });
}
