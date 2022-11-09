import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "./controller/categorias.controller";
import { Categoria } from "./entitie/categorias.entity";
import { CategoriasService } from "./service/categorias.service";



@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriasService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule],
})

    export class CategoriaModule { }