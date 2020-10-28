import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-fin-juego',
  templateUrl: './fin-juego.page.html',
  styleUrls: ['./fin-juego.page.scss'],
})
export class FinJuegoPage implements OnInit {
  eleccion: any;
  ganador: any;
  equipo1: any;
  equipo2: any;
  img:any;
  imagen:any;

  constructor(public alertController: AlertController,private router: Router) {}
  ngOnInit() {


  }


  ionViewWillEnter(){
    this.equipo1 = localStorage.getItem('equipo1')
    this.equipo2= localStorage.getItem('equipo2')
    console.log(this.equipo1)
    console.log(this.equipo2)
    }
  async espera(){
    if(this.ganador=="equipo1"){
      this.presentAlertConfirm(this.equipo1)
      localStorage.setItem('ganador', this.equipo1)
    }else{
      this.presentAlertConfirm(this.equipo2)
      localStorage.setItem('ganador', this.equipo1)
    }
  }
  async presentAlertConfirm(ganadores:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Felicidades equipo:'+ganadores,
      message: 'HAN GANADO!!!',
      buttons: [
        {
          text: 'Espera!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Simon',
          handler: () => {
            console.log(this.ganador)
            console.log(this.eleccion)
            console.log('Confirm Okay');
            if(this.eleccion=="si"){
              this.router.navigate(["/foto"]);
            }else{
              this.router.navigate(["/inicio"]);
            }
            localStorage.removeItem('equipo1')
            localStorage.removeItem('equipo2')
            localStorage.removeItem('turno')
          }
        }
      ]
    });



  await alert.present();


}
}
