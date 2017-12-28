import { LivrosService } from './../livros.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  id: number;
  livro: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livroService: LivrosService
  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
      this.id = params['id'];

      this.livro = this.livroService.getLivro(this.id);
      }
    );
  }

   /* console.log('ngOnInit: LivroDetalheComponent');
 
        this.inscricao = this.route.data.subscribe(
          (info: {livro: Livro }) => {
            console.log('Recebendo o obj Livro do Resolvers');
            this.livro = info.livro;
          }
        );
      } */

      ngOnDestroy(){
        this.inscricao.unsubscribe();
      }

      editarLivro(){
        this.router.navigate(['/livros', this.livro.id, 'editar']);
      }
  }

