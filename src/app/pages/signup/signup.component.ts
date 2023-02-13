import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    username:'',
    password:'',
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
  }

  constructor(private userService:UserService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username==null){
      //alert('El nombre de usuario es requerido');
      this.snackBar.open('El nombre de usuario es requerido','Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition: 'right'

      }

      );
      return;
    }

    if(this.user.nombre == '' || this.user.nombre==null){
      //alert('El nombre de usuario es requerido');
      this.snackBar.open('El nombre de la persona es requerido','Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition: 'right'

      }

      );
      return;
    }
    
    this.userService.anadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
//        alert('Usuario guardado con exito');
        Swal.fire('Usuario Guardado','Usuario guardado con exito','success');
      },(error)=>{
        console.log(error);
        //alert('Ha ocurrido un error en el sistema');
        this.snackBar.open('Ha ocurrido un error en el sistema','Aceptar',{
          duration:3000
        }
  
        );
      }
    )

  }

}
