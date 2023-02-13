import { Component, HostBinding, OnInit } from '@angular/core';
import baserUrl from 'src/app/services/helper';
import { RegionalService } from 'src/app/services/regional.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css']
})
export class RegionalComponent implements OnInit {

  @HostBinding('class') classes='row';
  mediaLocation=`${baserUrl}/media/`;

  regionales:any = [
    

  ]
  constructor(private regionalService:RegionalService) { }

  ngOnInit(): void {
    this.regionalService.listarRegionales().subscribe(
      (dato:any)=>{
        this.regionales=dato;
        console.log(this.regionales);
      },(error)=> {
        console.log(error);
        Swal.fire("Error !!","Error al cargar las regionals","error")
      }
    )
  }


  eliminar(idregional:any){
    Swal.fire({
      title:'Eliminar regional',
      text:'Estas seguro de eliminar el regional?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.regionalService.eliminarRegional(idregional).subscribe(
          (data)=>{
            this.regionales = this.regionales.filter((regional:any)=>regional.idregional !=idregional);
            Swal.fire('Examen eliminado', 'El regional ha sido eliminado de la base de datos','success');
          },(error)=>{
            Swal.fire('Error','Error al eliminar el regional','error');
          }
        )
      }
    }
    )
  }

}
