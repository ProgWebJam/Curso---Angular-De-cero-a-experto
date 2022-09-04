import { Component } from "@angular/core";


@Component({

    selector : 'app-contador',
    template : `
    
        <h1> {{ titulo }}</h1>

        <h3>"La base es :" <strong> {{ base }} </strong></h3>

        <button (click)='acumulador( +base )'> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)='acumulador( -base )'> - {{ base }} </button>

    `

})
export class ContadorComponent {

    public titulo : string = 'Contador app';
    public numero : number = 10;
    public base : number = 5;
  
    acumulador( valor : number ){
  
      this.numero += valor;
  
    }

}