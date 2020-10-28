import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-morada',
  templateUrl: './tarjeta-morada.page.html',
  styleUrls: ['./tarjeta-morada.page.scss'],
})
export class TarjetaMoradaPage implements OnInit {
  seleccion:string;
  tarjeta: tarjetas[]=[
    {
      nombre: "TARJETA AZUL",
      url: "/targeta-azul",
      color: "primary"
    },
    {
      nombre: "TARJETA VERDE",
      url: "/targeta-verde",
      color: "success"
    },{
      nombre: "TARJETA AMARILLA",
      url: "/tarjeta-amarilla",
      color: "warning"
    },
    {
      nombre: "TARJETA ROJA",
      url: "/tarjeta-roja",
      color: "danger"
    },
  ];
  constructor(private router: Router) { }
  ngOnInit() {
  }
  async ingreso(){
    console.log(this.seleccion)
    this.router.navigate([this.seleccion]);
  }
  radioSelect(event){
    console.log(this.seleccion)
  }
}
interface tarjetas{
  nombre: string;
  url: string;
  color: string;
}