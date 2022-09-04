import { Component } from "@angular/core";


@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{

    nombre : string = 'Ironmade';
    edad : number = 45

    get capitalizarNombre():string{

        return this.nombre.toUpperCase()

    }

    Nombrecapitalizado(): string{

        return ` ${this.nombre} - ${this.edad} `

    }

    cambiarNombre():void{
        this.nombre = 'Spaiderman';
    }

    cambiarEdad():void{
        this.edad = 30;
    }

}