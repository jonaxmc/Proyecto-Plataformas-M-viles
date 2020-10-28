import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
const circleR = 50;
const circleDasharray=2*Math.PI*circleR;
@Component({
  selector: 'app-tarjeta-roja',
  templateUrl: './tarjeta-roja.page.html',
  styleUrls: ['./tarjeta-roja.page.scss'],
})
export class TarjetaRojaPage implements OnInit {
  minutos:string
  segundos:string
  time: BehaviorSubject<string>;
  percent: BehaviorSubject<number> =new BehaviorSubject(100);
  timer: number;// en segundos
  interval;
  duracion:any;
  circleR=circleR;
  circleDasharray = circleDasharray;
  state: 'start' | 'stop' = 'stop';
  archivojson:JSON;
  numerocat: any;
  numeropreg: any;
  nombrecategoria: string;
  nombrepreg: string;
  nombrepista: string;
  nombrerespuesta: string;
  nombreingreso: string;
  nombreropcion: any;
  turno: any;
  constructor(public alertCtr:AlertController,private router: Router) { }
  
  ngOnInit() {
    fetch('../../assets/preguntas.json').then(response => {
      return response.json();
    }).then(data => {
        this.obtenerdatos(data)
    }).catch(err => {
      // Do something for an error here
    });
  }
  ionViewWillEnter(){
    this.minutos=localStorage.getItem('minutos')
    this.segundos=localStorage.getItem('segundos')
    console.log(this.minutos)
    this.time=new BehaviorSubject(this.minutos+':'+this.segundos)
    this.duracion=parseInt(localStorage.getItem('tiempo'))
  }
  async obtenerdatos(datos){
    console.log(typeof(datos))
    this.archivojson=JSON.parse(JSON.stringify(datos))
    this.numeropreg=this.getRandomArbitrary3()
    this.nombrepreg=this.archivojson["tarjeta_roja"]["preguntas_tarjeta"][this.numeropreg]["preg"]
    this.nombrerespuesta=this.archivojson["tarjeta_roja"]["preguntas_tarjeta"][this.numeropreg]["respuesta"]
    this.nombreropcion=this.archivojson["tarjeta_roja"]["preguntas_tarjeta"][this.numeropreg]["opciones"]
    console.log(this.nombreropcion)
  }
  getRandomArbitrary2() {
    return Math.floor(Math.random()*(2-0))+0
  }
  getRandomArbitrary3() {
    return Math.floor(Math.random()*(9-0))+0
  }
  startTimer(duration:number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration*1;
    this.updateTimeValue();
    this.interval = setInterval( () => {
      this.updateTimeValue();
    },1000);
  }
  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
    console.log("Se detuvo");
    
    console.log(this.nombreingreso)
    if(this.nombreingreso==this.nombrerespuesta){
      this.presentAlertPrompt()
    }else{
      this.presentAlertPrompt2(this.nombrerespuesta)
    }
  }
  stopTimer2(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
    console.log("Se detuvo");
    this.presentAlertPrompt2(this.nombrerespuesta);
    console.log(this.nombreingreso)

  }

  percentageOffset(percent){
    const percentFloat = percent / 100;
    return circleDasharray*(1-percentFloat);
  }

  updateTimeValue(){
    let minutes:any = this.timer / 60;
    let seconds:any = this.timer %60;
    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);
    const text = minutes + ':' + seconds;
    this.time.next(text);
    const totalTime = this.duracion*1;
    const percentage = ((totalTime-this.timer)/totalTime)*100;
    this.percent.next(percentage);
    --this.timer;
    if(this.timer<0){
      this.stopTimer2();
    }
    /*if(this.timer < 1){
      this.startTimer(this.duracion);
    }*/
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtr.create({
      header: 'ACERTASTE MIJO!!: ',
      message:'<img src="assets/imagenes/correcto.png" />',
      backdropDismiss:false,
      buttons: [
         {
          text: 'De acuerdo',
          handler: () => {
            console.log('Confirm Ok');
            this.turno=localStorage.getItem('turno')
            localStorage.setItem('turno', this.turno)
            this.nombreingreso=""
            this.router.navigate(["/tablero"]);
          }
        }
      ]
    });

    await alert.present();
  // registroEquipos(){
  //   console.log(this.informacion);
  // }

}
async presentAlertPrompt2(respuesta:string) {
  const alert = await this.alertCtr.create({
    header: 'FALLASTE MIJIN!! ',
    message:'<ion-item><ion-label>La respuesta correcta es:</br>'+respuesta+'</ion-label></ion-item><img src="assets/imagenes/incorrecto.png" />',
    backdropDismiss:false,
    buttons: [
       {
        text: 'De acuerdo',
        handler: () => {
          console.log('Confirm Ok');
          this.turno=localStorage.getItem('turno')
          if(this.turno=="0"){
            localStorage.setItem('turno', "1")
          }else{
            localStorage.setItem('turno', "0")
          }
          this.nombreingreso=""
          this.router.navigate(["/tablero"]);
        }
      }
    ]
  });

  await alert.present();
// registroEquipos(){
//   console.log(this.informacion);
// }

}


radioSelect(event) {
  console.log("radioSelect",event.detail);
  console.log(this.nombreingreso)
}


}
