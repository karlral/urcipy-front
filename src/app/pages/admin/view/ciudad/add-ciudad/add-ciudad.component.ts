import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ciudad',
  templateUrl: './add-ciudad.component.html',
  styleUrls: ['./add-ciudad.component.css']
})
export class AddCiudadComponent implements OnInit {

  paises:any=[

  ];

  ciudadData={
    nomciudad:"",
    pais:{
      idpais:''
    }
  }
  constructor(private paisService:PaisService,
    private ciudadService:CiudadService,
    private snack:MatSnackBar,private router:Router) { }
  


  ngOnInit(): void {
    this.paisService.listarPaises().subscribe(
      (dato:any) => {
        this.paises=dato;
        console.log(this.paises);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los datos','error');
      }
    )
  }

  formSubmit(){
    if(this.ciudadData.nomciudad.trim()=='' || this.ciudadData.nomciudad.trim()==null){
      this.snack.open("El nomciudad es requerido!!","",{
        duration:3000
      })
      return ;
    }

    this.ciudadService.agregarCiudad(this.ciudadData).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Ciudad Agregado.','El ciudad ha sido agregada con exito','success');
        this.ciudadData={
          nomciudad:"",
          pais:{
            idpais:''
          }
        }     
        this.router.navigate(['/admin/ciudad']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la ciudad','error');
      }
    )

  }

}
