import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutosController } from "./controller/produtos.controller";
import { Produtos } from "./entitie/produtos.entity";
import { ProdutosService } from "./service/produtos.service";



@Module({
    imports: [TypeOrmModule.forFeature([Produtos])],
    providers: [ProdutosService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule],
})
    export class ProdutosModule { }