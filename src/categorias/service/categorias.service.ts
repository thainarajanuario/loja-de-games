import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteResult,ILike, Repository } from "typeorm"
import { Categoria } from "../entitie/categorias.entity"



@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria)
        private categoriasRepository: Repository<Categoria>
    ) { }
    
    async findAll(): Promise<Categoria[]> {
        return await this.categoriasRepository.find({
            relations: {
                produtos: true
            }
        })
    }


    async findById(id: number): Promise<Categoria> {

        let categorias = await this.categoriasRepository.findOne({
            where: {
                id
            },
            relations: {
                produtos: true
            }
        })

        if (!categorias)
            throw new HttpException('Categoria não existe', HttpStatus.NOT_FOUND)

        return categorias
    }

    async findByNome(nome_categoria: string): Promise<Categoria[]> {
        return await this.categoriasRepository.find({
            where: {
                nome_categoria: ILike(`%${nome_categoria}%`)
            },
            relations: {
                produtos: true
            }
        })
    }

    async create(categorias: Categoria): Promise<Categoria> {
        return await this.categoriasRepository.save(categorias)
    }

    async update(categorias: Categoria): Promise<Categoria> {
        let buscarCategoria= await this.findById(categorias.id)

        if (!buscarCategoria || !buscarCategoria.id)
            throw new HttpException('Categoria Não Existe', HttpStatus.NOT_FOUND)

        return await this.categoriasRepository.save(categorias)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarCategoria = await this.findById(id)

        if (!buscarCategoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)

        return await this.categoriasRepository.delete(id)
    }
}