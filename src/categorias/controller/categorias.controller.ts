import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entitie/categorias.entity";
import { CategoriasService } from "../service/categorias.service";


@Controller('/categorias')
export class CategoriaController {
   constructor(private readonly categoriasservice: CategoriasService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriasservice.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriasservice.findById(id)

    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome:string): Promise<Categoria[]>{
        return this.categoriasservice.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categorias: Categoria): Promise<Categoria> {
        return this.categoriasservice.create(categorias)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categorias: Categoria): Promise<Categoria> {
        return this.categoriasservice.update(categorias)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriasservice.delete(id)
    }
}