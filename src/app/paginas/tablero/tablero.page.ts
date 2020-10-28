import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ObjetivoPage } from '../objetivo/objetivo.page';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.page.html',
  styleUrls: ['./tablero.page.scss'],
})
export class TableroPage implements OnInit {
  equipo1:string;
  equipo2:string;
  turno:any;
  buscarturno:any;
  pintura1:string;
  pintura2:string;
  tarjeta:any;
  definiciont:any;
  nequipo:any;
  constructor(public loadingCtrl: LoadingController,public alertCtr:AlertController,private router: Router) { 
    
  }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.equipo1 = localStorage.getItem('equipo1')
    this.equipo2= localStorage.getItem('equipo2')
    console.log(this.equipo1)
    console.log(this.equipo2)
    this.turno=this.getRandomArbitrary;
    this.buscarturno=localStorage.getItem('turno')
    console.log("buscar-turno ",this.buscarturno)
    if(!this.buscarturno){
      console.log("entro en if")
      if(this.turno==1){
        this.presentAlertPrompt("1","Empieza el equipo: "+this.equipo1);
      }else{
        this.presentAlertPrompt("0","Empieza el equipo: "+this.equipo2);
      }
    }
    else{
      console.log("entro en else")
      if(this.buscarturno=="1"){
        this.presentAlertPrompt(this.buscarturno,"Es el turno del equipo: "+this.equipo1);
      }else{
        this.presentAlertPrompt(this.buscarturno,"Es el turno del equipo: "+this.equipo2);
      }
    }
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/cubo.gif" />',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.tarjeta=this.getRandomArbitrary2();
    console.log('tarjeta:',this.tarjeta);
    if(this.tarjeta==1){
      this.definiciont='<h1><strong>Guayasamín:</strong><br>Pintar<br><strong>Vasija de barro:</strong><br>Moldear con plastilina</h1>'
      this.presentAlertTarget("Mijin Creativo",this.definiciont,'alert-blue','/targeta-azul',"azul")
    }
    else if(this.tarjeta==2){
      this.definiciont='<h1><strong>Michelena:</strong><br>Actuar como se te indica<br><strong>Torcasa/huirakchuru:</strong><br>Tararea la cancion</h1>'
      this.presentAlertTarget("Luces cámara acción",this.definiciont,'alert-success','/targeta-verde',"verde")
    }
    else if(this.tarjeta==3){
      this.definiciont='<h1><strong>Espejo:</strong><br>Selecciona una opcion para responder a la pregunta</h1>'
      this.presentAlertTarget("Demasiado norio",this.definiciont,'alert-warning','/tarjeta-roja',"roja")
    }
    else if(this.tarjeta==4){
      this.definiciont='<h1><strong>Asi ha de ser:</strong><br>Ordenar palabra<br><strong>Adivina adivinador:</strong><br>Adivinanzas</h1>'
      this.presentAlertTarget("Ponte pilas",this.definiciont,'alert-danger','/tarjeta-amarilla',"amarilla")
    }
    else{
      this.definiciont='<h1><strong>ya valiste mismo, el otro equipo escogera la pregunta por ti</strong></h1>'
      this.presentAlertTarget("ya valiste",this.definiciont,'alert-purple','/tarjeta-morada',"morada")
    }
  }
  getRandomArbitrary() {
    return Math.floor(Math.random()*(1-0))+0
  }
  getRandomArbitrary2() {
    return Math.floor(Math.random()*(7-1))+1
  }
  async presentAlertPrompt(equipo: string,equipon:string) {
    const alert = await this.alertCtr.create({
      header: equipon,
      backdropDismiss:false,
      buttons: [
         {
          text: 'De acuerdo',
          handler: () => {
            console.log('Confirm Ok');
            if(equipo=="1"){
              this.pintura1="light"
              this.pintura2="dark"
              localStorage.setItem('turno', "1")  
            }else{
              this.pintura2="light"
              this.pintura1="dark"
              localStorage.setItem('turno', "0")
            }
            console.log('PIRTURA ',this.pintura1);
            console.log('PIRTURA2 ',this.pintura2);
          }
        }
      ]
    });

    await alert.present();
  // registroEquipos(){
  //   console.log(this.informacion);
  // }

}
async presentAlertTarget(tarjeta: string,definicion: string,alertcss: string,ref:string,tipo:string) {
  const alert = await this.alertCtr.create({
    cssClass: alertcss,
    header: tarjeta,
    message: '<ion-card><ion-item><ion-icon name="pin" slot="start"></ion-icon>Mover a una casilla '+tipo+'</ion-item><ion-card-content>'+definicion+'</ion-card-content></ion-card>',
    backdropDismiss:false,
    buttons: [{
      text: 'MOSTRAR TARJETA',
      cssClass: alertcss,
      handler: () => {
        this.router.navigate([ref]);
      }
    }],
  });

  await alert.present();
// registroEquipos(){
//   console.log(this.informacion);
// }

}
}
