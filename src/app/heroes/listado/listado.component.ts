import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes : string [] = ['Iroman','Spaiderma','Thor','Hulk'];

  heroeBorrado : string = '';
  

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '';

  }

}
