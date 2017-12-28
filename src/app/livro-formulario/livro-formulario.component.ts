import { LivrosService } from './../livros/livros.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-formulario',
  templateUrl: './livro-formulario.component.html',
  styleUrls: ['./livro-formulario.component.css']
})
export class LivroFormularioComponent implements OnInit {

  livro: any = {};
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService
  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.livro = this.livrosService.getLivro(id);

        if(this.livro === null){
          this.livro = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
