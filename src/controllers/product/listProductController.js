import { list } from "../../models/productModel.js";

export async function listProductController(req, res) {
    const result = await list();

    res.json({
        message: "Lista de produtos",
        data: result
    })
}
