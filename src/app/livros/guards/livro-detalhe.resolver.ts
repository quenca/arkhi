import { LivrosService } from './../livros.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router/src/interfaces';
import { Livro } from '../livro';

@Injectable()
export class LivroDetalheResolver implements Resolve<Livro> {

    constructor(private livrosService: LivrosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('LivtoDetalheResolver');

            let id = route.params['id'];

            return this.livrosService.getLivro(id);
    }
}
