import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Componente[]=[
    {
    icono:"cog-outline",
    name: 'Configuracion',
    redirecTo: "/configuracion"
    },
    {
    icono:'shield-checkmark-outline',
    name: "objetivo",
    redirecTo: "/objetivo"
    },
    {
    icono:'help-circle-outline',
    name: "Acerca del juego",
    redirecTo: "/acerca"
    }
    ];
  constructor() { }

  ngOnInit() {}

}
interface Componente{
  icono:string,
  name:string,
  redirecTo:string,
}