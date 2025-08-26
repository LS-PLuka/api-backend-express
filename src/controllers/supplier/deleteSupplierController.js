export const deleteSupplierController = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fornecedor ${id} deletado com sucesso!` });
}
