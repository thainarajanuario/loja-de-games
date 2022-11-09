import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "../entitie/produtos.entity";
import { DeleteResult,Repository, ILike} from "typeorm";


@Injectable()
export class ProdutosService{

    constructor(
        @InjectRepository(Produtos)
        private ProdutosRepository: Repository<Produtos>
    ){}

    async findAll(): Promise<Produtos[]> {
        return await this.ProdutosRepository.find({
            relations:{
                categorias: true
            }
        })

    }

    async findById(id: number): Promise<Produtos> {
          
          let Produtos = await this.ProdutosRepository.findOne({
            where: {
                id 
            },
            relations:{
                categorias: true
            }
 });

 if (!Produtos)
 throw new HttpException('Produtos não existe', HttpStatus.NOT_FOUND)

 return Produtos
}

async findByNome(nome: string): Promise<Produtos[]>{
    return await this.ProdutosRepository.find({
        where: {
            nome: ILike(`%${nome}%`)
        },
        relations:{
            categorias: true
        }

    })
}

    async findByPreco(preco: number):Promise<Produtos[]>{
    return await this.ProdutosRepository.find({})
}

     async create(Produtos: Produtos): Promise<Produtos>{
        return await this.ProdutosRepository.save(Produtos)
     }


     async update(Produtos: Produtos): Promise<Produtos>{
        let buscarProdutos = await this.findById(Produtos.id)

        if(!buscarProdutos || !buscarProdutos.id)
           throw new HttpException('Produtos não existe', HttpStatus.NOT_FOUND)

           return await this.ProdutosRepository.save(Produtos)
     }

     async delete(id: number): Promise<DeleteResult> {
        let buscarProdutos = await this.findById(id)
         
        if(!buscarProdutos)
        throw new HttpException('Produtos não encontrado', HttpStatus.NOT_FOUND)

        return await this.ProdutosRepository.delete(id)
     }


}

