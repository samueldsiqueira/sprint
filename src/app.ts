import express, { Application } from 'express';
import { createWorkOrder, deleteWorkOrder, listWorkOrder, retrieveWorkOrder, updateWorkOrder } from './logic';
import { ensureWorkOrderExists } from './middlewares';

const app: Application = express();

app.use(express.json());
app.post('/work-order', createWorkOrder);
app.get('/work-order', listWorkOrder);
app.get('/work-order/:id', retrieveWorkOrder);
app.delete('/work-order/:id', ensureWorkOrderExists, deleteWorkOrder);
app.patch('/work-order/:id', ensureWorkOrderExists, updateWorkOrder);

app.listen(3000, () => {
	console.log('Server is running');
});
