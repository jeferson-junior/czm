import { Request, Response } from "express";
import { PedidosService } from "../services/PedidosService";

class PedidosController {
    async create(req: Request, res: Response): Promise<Response> {
       const { PedidoWeb,  CodigoProduto, QtdProduto, ValorProduto } = req.body;
            
       const pedidosService = new PedidosService();

        try {
            const pedido = await pedidosService.create({
                                                        PedidoWeb,  
                                                        CodigoProduto, 
                                                        QtdProduto, 
                                                        ValorProduto
            });

            return res.json(pedido);

        }catch(err) {
            return res.status(400).json({
                message: err.message,
            });
        }
    }

    async showByPedido(req: Request, res: Response) {
        const { PedidoWeb } = req.params;        
        const pedidosService = new PedidosService();
        const list = await pedidosService.listByPedido(PedidoWeb);

        return res.json(list);
    }
}

export { PedidosController };