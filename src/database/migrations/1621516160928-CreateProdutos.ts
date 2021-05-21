import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProdutos1621516160928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pedidos",
                columns: [
                    {
                        name: "Id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "PedidoWeb",
                        type: "number",
                    },
                    {
                        name: "CodigoProduto",
                        type: "number",
                    },
                    {
                        name: "QtdProduto",
                        type: "number",
                    },
                    {
                        name: "ValorProduto",
                        type: "number",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedidos");
    }

}
