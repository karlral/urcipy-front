import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-ciudad',
  templateUrl: './update-ciudad.component.html',
  styleUrls: ['./update-ciudad.component.css']
})
export class UpdateCiudadComponent implements OnInit {

  idciudad=0;

  paises:any=[

  ];

  ciudadData:any;

  constructor(private route:ActivatedRoute,
    private paisService:PaisService,
    private ciudadService:CiudadService,
    private snack:MatSnackBar,private router:Router) { }
  


  ngOnInit(): void {
    this.idciudad= this.route.snapshot.params['idciudad'];
    
    this.ciudadService.obtenerCiudad(this.idciudad).subscribe(
      (data)=>{
        this.ciudadData=data;
        console.log(this.ciudadData);
      },(error)=>{
        console.log(error);
      }
    )


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

    this.ciudadService.actualizarCiudad(this.ciudadData).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Ciudad Actualizado.','El ciudad ha sido agregada con exito','success');
             
        this.router.navigate(['/admin/ciudad']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la ciudad','error');
      }
    )

  }

}