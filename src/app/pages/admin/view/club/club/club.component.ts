import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubes:any = [
 
  ]
  constructor(private clubService:ClubService) { }

  ngOnInit(): void {
    this.clubService.listarClubes().subscribe(
      (dato:any)=>{
        this.clubes=dato;
        console.log(this.clubes);
      },(error)=> {
        console.log(error);
        Swal.fire("Error !!","Error al cargar las clubs","error")
      }
    )
  }


  eliminar(idclub:any){
    Swal.fire({
      title:'Eliminar club',
      text:'Estas seguro de eliminar la club?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.clubService.eliminarClub(idclub).subscribe(
          (data)=>{
            this.clubes = this.clubes.filter((club:any)=>club.idclub !=idclub);
            Swal.fire('Examen eliminado', 'La club ha sido eliminado de la base de datos','success');
          },(error)=>{
            Swal.fire('Error','Error al eliminar el club','error');
          }
        )
      }
    }
    )
  }

}
