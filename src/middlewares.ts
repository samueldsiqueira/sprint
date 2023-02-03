import { Request, Response, NextFunction } from 'express';
import { orders } from './database';

const consoleLogMiddleware = (request: Request, response: Response, next: NextFunction): Response | void => {
	console.log('Entrou no primeiro middleware');
	return next();
};
const consoleLogRequestMiddleware = (request: Request, response: Response, next: NextFunction): Response | void => {
	console.log(request);
	if (request.body.status === undefined) {
		return response.status(400).json({
			message: 'Status is undefined',
		});
	}
	return next();
};
const ensureWorkOrderExists = (request: Request, response: Response, next: NextFunction): Response | void => {
	const id: number = parseInt(request.params.id);

	const indexWorkOrder = orders.findIndex((el) => el.id === id);

	if (indexWorkOrder === -1) {
		return response.status(404).json({
			message: 'Work order not found',
		});
  }
  
  request.workOrder = {
    indexWorkOrder: indexWorkOrder
  }
  return next()
};

export { ensureWorkOrderExists };
