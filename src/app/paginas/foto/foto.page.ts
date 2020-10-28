import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  img : any;
  ganador:any;
  state: 'false' | 'true' = 'true';
  constructor(private socialSharing:SocialSharing,private router: Router,private route: ActivatedRoute,public camera:Camera) { }

  ngOnInit() {
    this.ganador = localStorage.getItem('ganador');
    if(this.img== undefined){
      this.state='true';
    }
    

  }

  abrirCamara(){
    this.camera.getPicture({
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      mediaType:this.camera.MediaType.PICTURE,
      allowEdit:false,
      encodingType:this.camera.EncodingType.JPEG,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }).then(resultado =>{
      this.img="data:img/jpeg;base64,"+resultado;
      this.state='false';
    }).catch(error =>{
      console.log(error);
    });
  }

  
async compartir(){
  this.socialSharing.share('','',this.img);

}

salir(){
  this.router.navigate(["/inicio"]);
}

}
