import { IsNotEmpty } from "class-validator"
import { Produtos } from "src/produtos/entitie/produtos.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: "tb_categorias"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome_categoria: string


     @OneToMany(() => Produtos, (produtos) => produtos.categorias)
     produtos: Produtos[]
}