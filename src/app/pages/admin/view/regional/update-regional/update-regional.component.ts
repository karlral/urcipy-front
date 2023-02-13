import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import baserUrl from 'src/app/services/helper';
import { MediaService } from 'src/app/services/media.service';
import { RegionalService } from 'src/app/services/regional.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-regional',
  templateUrl: './update-regional.component.html',
  styleUrls: ['./update-regional.component.css']
})
export class UpdateRegionalComponent implements OnInit {
  url?:String;
  currentFile?:File;
  message='';
  fileName='';
  preview = '';
  mediaLocation='';

  idregional =0;
  regionalData:any;

  constructor(private regionalService:RegionalService,
    private snack:MatSnackBar,private router:Router,
    private route:ActivatedRoute,
    private mediaService:MediaService) { }

  ngOnInit(): void {
    this.idregional= this.route.snapshot.params['idregional'];
    
    this.regionalService.obtenerRegional(this.idregional).subscribe(
      (data)=>{
        this.regionalData=data;
        console.log(this.regionalData);
        this.mediaLocation=`${baserUrl}/media/${this.regionalData.logo}`;
        console.log(this.mediaLocation);
      },(error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(){
    if(this.regionalData.nomregional.trim()=='' || this.regionalData.nomregional.trim()==null){
      this.snack.open("El nomregional es requerido!!","",{
        duration:3000
      })
      return ;
    }

    if(this.currentFile){
      const formData= new FormData();
      formData.append('file',this.currentFile);

      this.mediaService.uploadFile(formData).subscribe(
        response =>{
          console.log('response',response);
          this.url=response.url;
        }
      );
      this.regionalData.logo=this.fileName;
    }else{
      this.snack.open("El logo no pudo cargarse!!","",{
        duration:3000
      })
      return ;
    }

    this.regionalService.actualizarRegional(this.regionalData).subscribe(
      (dato:any) => {
        this.regionalData.nomregional='';
        this.regionalData.nomcorto='';
        this.regionalData.logo='';
        Swal.fire('Regional Agregado.','El regional ha sido actualizada con exito','success');
        this.router.navigate(['/admin/regional']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la regional','error');
      }
    )

  }



  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
     
      this.fileName = this.currentFile.name;
      /*** para mostrar antes de enviar y guardar */
      
        this.preview = '';
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      
      //**** */
    } else {
      this.fileName = '';
    }
  }


}
