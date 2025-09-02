import { remove } from "../../models/userModel.js"

export const deleteUserController = async (req, res) => {
  const { id } = req.params

  const result = await remove(+id)

  res.json({
    message: `Usuário ${id} deletado com sucesso!`,
    user: result
  })
}
