import { getProduto } from "../../models/productModel.js";

export async function getByIdProductController(req, res) {
    const id = req.params.id;

    const result = await getProduto(id);
    res.json({
        message: "Produto encontrado com sucesso",
        data: result
    })
}
