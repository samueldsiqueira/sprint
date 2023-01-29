interface IWorkOrderRequest{
  description: string
  mechanical: string
  client: string
  price: number
}

interface IWorkOrder extends IWorkOrderRequest{
  start_date: Date
  end_date: Date
  id: number
}

const orders: Array<IWorkOrder> = []

export default orders 