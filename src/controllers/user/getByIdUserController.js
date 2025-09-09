import { getById } from "../../models/userModel.js"

export const getByIdUserController = (req, res) => {
  const { id } = req.params

  const result = getById(+id)
  res.json({
    message: `Usuário ${id} encontrado com sucesso!`,
    data: result
  })
}
