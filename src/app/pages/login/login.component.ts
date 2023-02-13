import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": ''
  }

  constructor(private sanck: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {


    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      /* console.log('Click en el boton de login'+this.loginData.username);*/
      this.sanck.open('El nombre de usuario es requerido!!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {

      this.sanck.open('La contraseña es requerido!!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.loginService.loginUser(data.token);

        /*** probamos  */
        console.log("Cargamos el token");
        if (this.loginService.isLoggedIn()) {
          console.log("Se registro el token");

        }
        /*** */
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          console.log("Cargamos el usuario");

          /**Prueba */

          if (this.loginService.isUserIn()) {
            console.log("Se registro el Usuario");

          }
          /** */

          if (this.loginService.getUserRole() == "ADMINISTRADOR") {
            //dashboard admin
            //window.location.href='/admin'; 
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);
          } else if (this.loginService.getUserRole() == "NORMAL") {
            // user dashboard
            //window.location.href='/user-dashboard';
            console.log('Entramos en el usuario');
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          } else {
            this.loginService.logout();
          }

        }, (error) => {
          console.log(error);
          this.sanck.open('Usuario no registrado, vuelva a intentar!!', 'Error', {
            duration: 3000
          }
          )
        });


      }, (error) => {
        console.log(error);
        this.sanck.open('Credencial invalido, vuelva a intentar!!', 'Aceptar', {
          duration: 3000
        })

      }
    )

  }
}
