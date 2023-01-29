// Essa interface para saber o que vem do insomnia
interface IWorkOrderRequest {
	description: string;
	mechanical: string;
	client: string;
	price: number;
}

// E outra para tipar a ordem de serviço no banco de dados
interface IWorkOrder extends IWorkOrderRequest {
	startDate: Date;
	endDate: Date;
	id: number;
}
type WorkOrderRequiredKeys = "description" | "mechanical" | "client" | "price"


export { IWorkOrder, IWorkOrderRequest, WorkOrderRequiredKeys };
