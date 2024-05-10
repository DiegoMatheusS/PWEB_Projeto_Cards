import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprodutos } from '../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Iprodutos[]>
  {
    return this.http.get<Iprodutos[]>(this.URL);
  }
}
