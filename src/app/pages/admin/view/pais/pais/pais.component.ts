import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises:any = [
    

  ]
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.paisService.listarPaises().subscribe(
      (dato:any)=>{
        this.paises=dato;
        console.log(this.paises);
      },(error)=> {
        console.log(error);
        Swal.fire("Error !!","Error al cargar las paiss","error")
      }
    )
  }


  eliminar(idpais:any){
    Swal.fire({
      title:'Eliminar pais',
      text:'Estas seguro de eliminar el pais?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.paisService.eliminarPais(idpais).subscribe(
          (data)=>{
            this.paises = this.paises.filter((pais:any)=>pais.idpais !=idpais);
            Swal.fire('Examen eliminado', 'El pais ha sido eliminado de la base de datos','success');
          },(error)=>{
            Swal.fire('Error','Error al eliminar el pais','error');
          }
        )
      }
    }
    )
  }

}
