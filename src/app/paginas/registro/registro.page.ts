import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  equipo1:string="EQUIPO 1";
  equipo2:string="EQUIPO 2";
  // informacion={
  //   equipo1:'',
  //   equipo2:''
  //   }

  constructor(public alertCtr:AlertController,private router: Router) { }

  ngOnInit() {
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtr.create({
      header: 'Nombre de tu Equipo',
      backdropDismiss:false,
      inputs: [
        {
          name: 'txtequipo1',
          type: 'text',
          placeholder: 'Nombre de tu Equipo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok',data);
            this.equipo1=data.txtequipo1;
            if(this.equipo1){
              localStorage.setItem('equipo1', this.equipo1)  
            }else{
              localStorage.setItem('equipo1', "EQUIPO 1")  
            }
                 
          }
        }
      ]
    });

    await alert.present();
  // registroEquipos(){
  //   console.log(this.informacion);
  // }

}
async presentAlertPrompt2() {
  const alert = await this.alertCtr.create({
    header: 'Nombre de tu Equipo',
    backdropDismiss:false,
    inputs: [
      {
        name: 'txtequipo2',
        type: 'text',
        placeholder: 'Nombre de tu Equipo'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          console.log('Confirm Ok ',data);
          this.equipo2=data.txtequipo2;
          if(this.equipo2){
            localStorage.setItem('equipo2', this.equipo2)  
          }else{
            localStorage.setItem('equipo2', "EQUIPO 2")  
          }
        }
      }
    ]
  });
  await alert.present();
  

}
async ingreso(){
  if(this.equipo2){
    localStorage.setItem('equipo2', this.equipo2)  
  }else{
    localStorage.setItem('equipo2', "EQUIPO 2")  
  }
  if(this.equipo1){
    localStorage.setItem('equipo1', this.equipo1)  
  }else{
    localStorage.setItem('equipo1', "EQUIPO 1")  
  }
  this.router.navigate(["/tablero"])
}
}