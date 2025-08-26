// Configurando Express
import express from 'express'

const app = express()
const port = 5000

app.use(express.json())

// Importando os Routers
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import supplierRouter from './routers/supplierRouter.js';

// Usando Routers
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/supplier', supplierRouter);

// Teste server.js
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
