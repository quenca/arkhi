import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class LivrosService {

  private livros: Livro[] = [
    {id: 1, titulo: 'Harry Potter 1', autor: 'JK', editora: 'Abril', data: '30 de abril de 2001', preco: '30.55', criticas: 'Best Seller'},
    {id: 2, titulo: 'Harry Potter 2', autor: 'JK', editora: 'Abril', data: '30 de abril de 2002', preco: '40.99', criticas: 'Best Seller'},
    {id: 3, titulo: 'Deus um Delirio', autor: 'RB', editora: 'GG', data: '20 de janeiro de 2016', preco: '50.00', criticas: 'Melhor do ano'}
 ];

  getLivros(){
    return this.livros;
  }

  getLivro(id: number){
    for(let i=0; i<this.livros.length; i++){
      let livros = this.livros[i];
      if(livros.id == id){
        return livros;
      }
    }
    return null;
  }
  constructor() { }

}
