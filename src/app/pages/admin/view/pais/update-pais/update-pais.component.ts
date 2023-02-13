import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-pais',
  templateUrl: './update-pais.component.html',
  styleUrls: ['./update-pais.component.css']
})
export class UpdatePaisComponent implements OnInit {

 
  idpais =0;
  paisData:any;

  constructor(private paisService:PaisService,private snack:MatSnackBar,private router:Router,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.idpais= this.route.snapshot.params['idpais'];
    
    this.paisService.obtenerPais(this.idpais).subscribe(
      (data)=>{
        this.paisData=data;
        console.log(this.paisData);
      },(error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(){
    if(this.paisData.nompais.trim()=='' || this.paisData.nompais.trim()==null){
      this.snack.open("El nompais es requerido!!","",{
        duration:3000
      })
      return ;
    }

    this.paisService.actualizarPais(this.paisData).subscribe(
      (dato:any) => {
        this.paisData.nompais='';
        this.paisData.nacionalidad='';
        Swal.fire('Pais Agregado.','El pais ha sido actualizada con exito','success');
        this.router.navigate(['/admin/pais']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la pais','error');
      }
    )

  }

}
