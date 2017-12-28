import { Component, OnInit } from '@angular/core';
import { LivrosService } from './livros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  private id: String;
  private livros: any[] = [];

  constructor(private livrosService: LivrosService,
              private route: ActivatedRoute)
              {
    this.id = this.route.snapshot.params['id'];
               }

  ngOnInit() {
    this.livros = this.livrosService.getLivros();
  }

}
