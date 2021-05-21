import { getCustomRepository, Repository } from "typeorm";
import { PedidosRepository } from "../repositories/PedidosRepository";
import { Pedido } from "../entities/Pedido";

interface IPedidosCreate{
                            PedidoWeb: number;
                            CodigoProduto: number;
                            QtdProduto: number;
                            ValorProduto: number;
}

class PedidosService {
    private pedidosRepository: Repository<Pedido>;

    constructor(){
        this.pedidosRepository = getCustomRepository(PedidosRepository);
    }

    async create({
                    PedidoWeb,
                    CodigoProduto,
                    QtdProduto,
                    ValorProduto
                }: IPedidosCreate) {

        const pedido = this.pedidosRepository.create({
                                                        PedidoWeb,
                                                        CodigoProduto,
                                                        QtdProduto,
                                                        ValorProduto
        });

        await this.pedidosRepository.save(pedido);

        return pedido;
    }

    async listByPedido(user_id: string ) {
        const list = await this.pedidosRepository.find({
    });

        return list;
    }
}

export { PedidosService };