import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 
  listCredenciales: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder, private _loginService: LoginService,private toastr: ToastrService ,private router:Router) {
    this.form = this.fb.group({
      username:  ['', Validators.required],
      email: ['', Validators.required],
      password1: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]],   
      password2: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]],  
    })
   }

   ngOnInit(): void {
    //this.obtenerCredenciales() ;
  }  

  guardarLogin() {

    const DatosLogin: any = {
      username: this.form.get('username')?.value,
      email: this.form.get('email')?.value,
      password1: this.form.get('password1')?.value,   
      password2: this.form.get('password1')?.value   
    }

    if(this.id == undefined) {
      // Agregamos una nueva tarjeta
        this._loginService.saveCredenciales(DatosLogin).subscribe(data => {
          this.toastr.success('Usuario registrado con éxito.!', 'Usuario Registrado');
          //this.obtenerTarjetas();
          console.log(data);
          this.guardarToken();
          this.router.navigate(["/login"]);
          this.form.reset();
         
        }, error => {
          this.toastr.error('Opss.. No es posible realizar el registro del usuario.','Error')
          console.log(error);
        })    

    }   
  }

  guardarToken() {
    const DatosLogin: any = {
      username: this.form.get('username')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password1')?.value      
    }
    if(this.id == undefined) {
      // Agregamos una nueva tarjeta
        this._loginService.saveToken(DatosLogin).subscribe(data => {
          this.toastr.success('Ingreso de usuario exitoso!', 'Ingreso exitoso');
          //this.obtenerTarjetas();
          console.log(data);
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. El usuario no se encuentra registrado','Error')
          console.log(error);
        })   
    }   
  }


}
