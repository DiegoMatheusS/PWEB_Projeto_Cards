import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprodutos } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  produto: Iprodutos ={
    name: '',
    validade: new Date(),
    precoProduto: 0
  }


  constructor(private ProdutosService:ProdutosService, private router: Router, private ActivaRouter: ActivatedRoute ) {

  }

  ngOnInit(): void {
    const id = Number(this.ActivaRouter.snapshot.paramMap.get('id'));
    this.ProdutosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;

    });
  }

  salvarProduto(): void {
    this.ProdutosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.ProdutosService.exibirMensagem('Sistema: ',`${this.produto.name} foi atualizado com sucesso.`,
      'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }

}
