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
    nome:this.fb.control<string|null>(null),
    senha:this.fb.control<string|null>(null),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
