import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  minutos:string;
  segundo:string;
  tiempo:string;
  minutosnuevos:string;
  segundosnuevos:string;
  constructor() {
    this.minutos=localStorage.getItem('minutos')
    this.segundo=localStorage.getItem('segundos')
    this.tiempo=localStorage.getItem('tiempo')
    if(!this.minutos){
      localStorage.setItem('minutos',"0")
    }
    if(!this.segundo){
      localStorage.setItem('segundos',"20")
    }
    if(!this.tiempo){
      localStorage.setItem('tiempo',"20")
    }
    
   }

  ngOnInit() {

  }

}
