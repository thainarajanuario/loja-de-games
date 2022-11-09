import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categorias/entitie/categorias.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_Produtos"})
export class Produtos{

   @PrimaryGeneratedColumn()
   id: number;
    
    @IsNotEmpty()
    @MaxLength(10)
    @Column({length: 100, nullable: false})     
    nome: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    preco: number;
    

    @ManyToOne(() => Categoria, (categorias) => categorias.produtos, {
      onDelete: "CASCADE"
    })

    categorias: Categoria[]
   
}
