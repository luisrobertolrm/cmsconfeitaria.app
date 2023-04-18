import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
limpar() {
throw new Error('Method not implemented.');
}
logar() {
 this.authService.autenticarRemoto(this.form.controls.nome.value,this.form.controls.senha.value).subscribe((sucesso: boolean) => {
  if(sucesso == true){
    this.route.navigate(['/']);
  }
  else
  console.log('usuario ou senha incorreto')
 });
}

  form = this.fb.group({
    nome:this.fb.control<string|null>("",{validators:[Validators.required]}),
    senha:this.fb.control<string|null>(null),
  });

  constructor(private fb: FormBuilder, private authService : AuthenticationService, private route : Router) { }

  ngOnInit(): void {
    var valor1 = this.form.value;
    var valor2 = this.form.getRawValue();
    this.form.controls.nome.valid
  }

  enviar(){
    if(!this.form.valid){
      return;
    }
  }

  get nomeValidator(){
    return this.form.controls.nome.valid;
  }
}
