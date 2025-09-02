import { create } from "../../models/userModel.js"

export const createUserController = async (req, res) => {
  const user = req.body

  const result = await create(user)

  res.json({
    message: 'Usuário criado com sucesso!',
    user: result
  })
}
