import { Router } from "express";
import { PedidosController } from "./controllers/PedidosController";

const routes = Router();
const pedidosController = new PedidosController();

routes.post('/pedidos', pedidosController.create);


export { routes };