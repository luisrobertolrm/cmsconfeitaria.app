import { ReturnStatement, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
throw new Error('Method not implemented.');
}

  form = this.fb.group({
    nome:this.fb.control<string>("",{validators:[Validators.required]}),
    senha:this.fb.control<string|null>(null),
  });

  constructor(private fb: FormBuilder) { }

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
