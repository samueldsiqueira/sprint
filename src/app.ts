import express, { Application, Request, Response } from 'express';
/* importo o express e o Application, que é a interface que vai tipar a interface do express */
import { createWorkOrder, listWorkOrder } from './logic';

const app: Application = express();
/*Aqui eu defino que a tipagem é Application e instancio o express*/

app.use(express.json());

app.post('/work-order', createWorkOrder);

app.get('/work-order', listWorkOrder);

app.listen(3000, () => {
	console.log('Server is running');
});
/*Aqui chamo app.listen passando a porta 3000 e uma callback passando um console.log informando 
que está funcionando, mas ainda não é possível iniciar o server chamando o comando node src/app.ts,
pois o node, não reconhece a sintaxe mais atualizada do ECMAScript e não reconhece o TS sendo
necessário instalar o ts-node-dev -D como biblioteca de desenvolvimento*/
