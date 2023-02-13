import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';
import { RegionalService } from 'src/app/services/regional.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-regional',
  templateUrl: './add-regional.component.html',
  styleUrls: ['./add-regional.component.css']
})
export class AddRegionalComponent implements OnInit {
  url?:String;
  currentFile?:File;
  message='';
  fileName='';
  preview = '';

  regional={
    nomregional:"",
    nomcorto:"",
    logo:""
  }
  constructor(private mediaService:MediaService,
    private regionalService:RegionalService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.regional.nomregional.trim()=='' || this.regional.nomregional.trim()==null){
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
      this.regional.logo=this.fileName;
    }else{
      this.snack.open("El logo no se cargo!!","",{
        duration:3000
      })
      return ;
    }

    this.regionalService.agregarRegional(this.regional).subscribe(
      (dato:any) => {
        this.regional.nomregional='';
        this.regional.nomcorto='';
        this.regional.logo='';
        Swal.fire('Regional Agregado.','El regional ha sido agregada con exito','success');
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
