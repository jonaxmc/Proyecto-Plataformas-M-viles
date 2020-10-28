import { Component, OnInit } from '@angular/core';
import { AngularDelegate, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  minutos:any;
  segundo:string;
  tiempo:string;
  tiempo2:number;
  minutosnuevos:string;
  segundosnuevos:string;
  numbers = [];
  numbers2 = [];
  constructor(private alertCtr: AlertController) { 
    for (var i = 0; i < 61; i++) {
      this.numbers.push(i.toString());
  }
  for (var i = 0; i < 60; i++) {
    this.numbers2.push(i.toString());
}
  }
  ionViewWillEnter(){
    this.minutos=localStorage.getItem('minutos')
    this.segundo=localStorage.getItem('segundos')
    console.log("minutos:",this.minutos)
  }
  ngOnInit() {
  }
  configurar(){
    console.log(this.minutosnuevos)
    console.log(this.segundosnuevos)
    this.tiempo2=parseInt(this.minutosnuevos)*60+parseInt(this.segundosnuevos)
    this.tiempo=this.tiempo2.toString()
    console.log(this.tiempo)
    if(this.minutosnuevos && this.segundosnuevos && this.tiempo){
      localStorage.setItem('minutos',this.minutosnuevos)
      localStorage.setItem('segundos',this.segundosnuevos)
      localStorage.setItem('tiempo',this.tiempo)
      this.presentAlertPrompt("configuracion cambiada")
    }
    else{
    this.presentAlertPrompt("No ingresaste ningun parametro")
    }
  }
async presentAlertPrompt(mensaje:string) {
    const alert = await this.alertCtr.create({
      header: mensaje,
      backdropDismiss:false,
      buttons: [
         {
          text: 'De acuerdo',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  // registroEquipos(){
  //   console.log(this.informacion);
  // }

}
}
