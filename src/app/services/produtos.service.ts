import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Iprodutos } from '../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = "http://localhost:3000/produtos";

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<Iprodutos[]>
  {
    return this.http.get<Iprodutos[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibiErro(erro)))
  };
  exibiErro(e: any): Observable<any>{
    this.exibirMensagem('Erro!!!', 'Nâo foi possivel realizar a operação', 'toast-error');
    return EMPTY;
  }
  exibirMensagem(titulo: string, mensagem: string, tipo: string): void{
    this.toastr.show(mensagem, titulo,{closeButton: true, progressBar: true}, tipo)

  }
}
