import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pais',
  templateUrl: './add-pais.component.html',
  styleUrls: ['./add-pais.component.css']
})
export class AddPaisComponent implements OnInit {

  pais={
    nompais:"",
    nacionalidad:""
  }
  constructor(private paisService:PaisService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.pais.nompais.trim()=='' || this.pais.nompais.trim()==null){
      this.snack.open("El nompais es requerido!!","",{
        duration:3000
      })
      return ;
    }

    this.paisService.agregarPais(this.pais).subscribe(
      (dato:any) => {
        this.pais.nompais='';
        this.pais.nacionalidad='';
        Swal.fire('Pais Agregado.','El pais ha sido agregada con exito','success');
        this.router.navigate(['/admin/pais']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la pais','error');
      }
    )

  }

}
