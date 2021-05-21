import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Pedidos")
class Pedido {
    @PrimaryGeneratedColumn('increment')
    Id: number;
    
    @Column()
    PedidoWeb: number;

    @Column()
    CodigoProduto: number;

    @Column()
    QtdProduto: number;

    @Column()
    ValorProduto: number;
}

export { Pedido };