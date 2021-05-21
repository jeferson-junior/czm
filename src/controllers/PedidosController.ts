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
}

export { PedidosController };