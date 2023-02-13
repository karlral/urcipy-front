import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  ciudades:any = [
 
  ]
  constructor(private ciudadService:CiudadService) { }

  ngOnInit(): void {
    this.ciudadService.listarCiudades().subscribe(
      (dato:any)=>{
        this.ciudades=dato;
        console.log(this.ciudades);
      },(error)=> {
        console.log(error);
        Swal.fire("Error !!","Error al cargar las ciudads","error")
      }
    )
  }


  eliminar(idciudad:any){
    Swal.fire({
      title:'Eliminar ciudad',
      text:'Estas seguro de eliminar la ciudad?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.ciudadService.eliminarCiudad(idciudad).subscribe(
          (data)=>{
            this.ciudades = this.ciudades.filter((ciudad:any)=>ciudad.idciudad !=idciudad);
            Swal.fire('Examen eliminado', 'La ciudad ha sido eliminado de la base de datos','success');
          },(error)=>{
            Swal.fire('Error','Error al eliminar el ciudad','error');
          }
        )
      }
    }
    )
  }

}
