import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categoria.module';
import { Categoria } from './categorias/entitie/categorias.entity';
import { Produtos } from './produtos/entitie/produtos.entity';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_loja_de_games',
      entities: [Produtos, Categoria],
      synchronize: true 
     }),
        ProdutosModule,
        CategoriaModule
        
   ],
  
  controllers: [],
  providers: [],
})
export class AppModule { }
