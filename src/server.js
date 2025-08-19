import express from 'express'

// Importando os Routers
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import supplierRouter from './routers/supplierRouter.js';
import carRouter from './routers/carRouter.js';

const app = express()
const port = 5000

app.use(express.json())

// Usando Routers
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/supplier', supplierRouter);
app.use('/car', carRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
