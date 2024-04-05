import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto: string = "Honda City";
  anuncio: string = `O ${this.nomeProduto} está em promoção` ;
  idProduto: number = 123;
  precoProduto: number = 80.000;
  promocao: boolean = true;

  constructor () {
   // this.anuncio = "O" + this.nomeProduto + "Esta em Promoção"; com concatenação
    console.log("Nome do Produto:", this.nomeProduto);
    console.log("Anuncio:", this.anuncio);
    console.log("ID:", this.idProduto);
    console.log("Preço:", this.precoProduto.toFixed(3));
    console.log("Promoção:", this.promocao);

    // escopo das variaveis dentro do código
    var idade = 23
    console.log("Minha idade é: ", idade);

    let idade1 = 23
    console.log("Minha idade é: ", idade1);

    /* var varivel1;
    let variavel2;
    const variavel3 = 1;
    */

   /* function imprimeIDadeVar()
    {
      for (var idade = 30; idade <=40; idade ++) {
        console.log("Idade dentro do for: ", idade)
      }
      console.log("Idade fora do for: ",idade)
    }
    imprimeIDade()*/

    function imprimeIDade()
    {
      for (let idade = 30; idade <=40; idade++) {
        console.log("Idade dentro do for: ", idade)
      }
      console.log("Idade fora do for: ",idade)
    }
    imprimeIDade()


  }

}
