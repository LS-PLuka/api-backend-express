import { remove } from "../../models/productModel.js";

export async function deleteProductController(req, res) {
    const id = req.params.id;

    const result = await remove(id);
    res.json({
        message: "Produto deletado com sucesso",
        product: result
    })
}
