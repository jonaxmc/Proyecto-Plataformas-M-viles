import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  
})
export class AcercaPage implements OnInit {
  desarrolladores=[
    {
    nombre:'Esteban Carrera',
    universidad:"Universidad Politécnica Salesiana",
    correo:"ecarrerac3@est.ups.edu.ec",
    cargo:"",
    img:"/assets/imagenes/carrera.jpg"
     },
     {
      nombre:'Wendy German',
      universidad:"Universidad Politécnica Salesiana",
      correo:"wgerman@est.ups.edu.ec",
      cargo:"",
      img:"/assets/imagenes/german.jpg"
      },
      {
      nombre:'Jonathan Mañay',
      universidad:"Universidad Politécnica Salesiana",
      correo:"jmanay@est.ups.edu.ec",
      cargo:"",
      img:"/assets/imagenes/many.jpg"
      },
      {
      nombre:'Diego Osorio',
      universidad:"Universidad Politécnica Salesiana",
      correo:"dosorio@est.ups.edu.ec",
      cargo:"",
      img:"/assets/imagenes/osorio.png"
      }
      
]

constructor(public alertCtr:AlertController) { }

ngOnInit() {
}
async presentAlert(persona) {
  const alert = await this.alertCtr.create({
   // cssClass: 'my-custom-class',
    message: ` <ion-card >
    <ion-card-header color="primary">
      <ion-card-subtitle>${persona.universidad}</ion-card-subtitle>
      <ion-card-title>${persona.nombre}</ion-card-title>
      </ion-card-header>
    <ion-card-content>      
        <img src=${persona.img} align="center" style="width:50px; height:50px;"></ion-img>
    </ion-card-content>
    <ion-item>${persona.correo}</ion-item>
</ion-card>`,
backdropDismiss:false,
    buttons:[{
      text: 'Ok',
        handler: () => {
          console.log('Confirm Okay');}
    }]
  });
  await alert.present();
}

}
