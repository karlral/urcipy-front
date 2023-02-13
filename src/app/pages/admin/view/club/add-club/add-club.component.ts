import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { RegionalService } from 'src/app/services/regional.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {

  regionales:any=[

  ];

  clubData={
    nomclub:"",
    regional:{
      idregional:''
    }
  }
  constructor(private regionalService:RegionalService,
    private clubService:ClubService,
    private snack:MatSnackBar,private router:Router) { }
  


  ngOnInit(): void {
    this.regionalService.listarRegionales().subscribe(
      (dato:any) => {
        this.regionales=dato;
        console.log(this.regionales);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los datos','error');
      }
    )
  }

  formSubmit(){
    if(this.clubData.nomclub.trim()=='' || this.clubData.nomclub.trim()==null){
      this.snack.open("El nomclub es requerido!!","",{
        duration:3000
      })
      return ;
    }

    this.clubService.agregarClub(this.clubData).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Club Agregado.','El club ha sido agregada con exito','success');
        this.clubData={
          nomclub:"",
          regional:{
            idregional:''
          }
        }     
        this.router.navigate(['/admin/club']);
      },(error) => {
        console.log(error);
        Swal.fire('Error','Error al guardar la club','error');
      }
    )

  }

}