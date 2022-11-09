import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produtos } from "../entitie/produtos.entity";
import { ProdutosService } from "../service/produtos.service";


@Controller('/Produtos')
export class ProdutosController {
    constructor(private readonly produtosservice:ProdutosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]> {
        return this.produtosservice.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number): Promise<Produtos> {
        return this.produtosservice.findById(id)

    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome:string): Promise<Produtos[]>{
        return this.produtosservice.findByNome(nome)

    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Produtos: Produtos): Promise<Produtos>{
        return this.produtosservice.create(Produtos)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Produtos: Produtos): Promise <Produtos>{
        return this.produtosservice.update(Produtos)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param ('id', ParseIntPipe) id: number) {
        return this.produtosservice.delete(id)
    }
    
    
}