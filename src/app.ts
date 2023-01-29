import express, { Application, Request, Response } from 'express';
import response from 'express';
/* importo o express e o Application, que é a interface que vai tipar a interface do express */


const app: Application = express()
/*Aqui eu defino que a tipagem é Application e instancio o express*/

app.use(express.json())

// Essa interface para saber o que vem do insomnia 
interface IWorkOrderRequest{
  description: string
  mechanical: string
  client: string
  price: number
}

// E outra para tipar a ordem de serviço no banco de dados
interface IWorkOrder extends IWorkOrderRequest{
  startDate: Date
  endDate: Date
  id: number
}

const orders: Array<IWorkOrder> = []
const ids: Array<number> = []

export default orders 

app.post('/work-order', (request: Request, response: Response):Response => {
  const orderData: IWorkOrderRequest = request.body
  
  // retirando ID do objeto para validar se não existe outro ID igual
  const id: number = Math.floor(Math.random() * 1000)
  const idExists = ids.find(el=>el===id)

  if(idExists){
    return response.status(409).json({
      message: "id exists, try again"
    })
  }
// retirando ID do objeto para validar se não existe outro ID igual


  const newOrderData: IWorkOrder = {
    id:id,
    startDate: new Date(),
    endDate: new Date(Date.now() * 1000),
    // aqui eu estou pegando data atual + os segundos que tem o dia e transformando em segundos;
    ...orderData
  }    
  ids.push(id)
  orders.push(newOrderData)

  response.status(201).json(newOrderData)
  // console.log(newOrderData)
  // return response.send('deu certo!')
})

app.get('/work-order', (request: Request, response: Response):Response => {
  return response.json(orders)
})


app.listen(3000, () => {
  console.log('Server is running');
})
/*Aqui chamo app.listen passando a porta 3000 e uma callback passando um console.log informando 
que está funcionando, mas ainda não é possível iniciar o server chamando o comando node src/app.ts,
pois o node, não reconhece a sintaxe mais atualizada do ecmascrip e não reconhece o TS sendo
necessário instalar o ts-node-dev -D como biblioteca de desenvolvimento*/