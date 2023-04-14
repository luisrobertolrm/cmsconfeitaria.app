import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-receita-adicionar',
  templateUrl: './receita-adicionar.component.html',
  styleUrls: ['./receita-adicionar.component.scss']
})
export class ReceitaComponent implements OnInit {

  formGroup = this.fb.group({
    id : this.fb.control<number>(0),
    nome : this.fb.control<string>(""),
    modoPreparo : this.fb.control<string>(""),
    dataCadastro : this.fb.control<Date>(new Date())
  })
  
  dataCadastro! : any;

  @Output()
  onClose = new EventEmitter();

  constructor(private service:AdminService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.dataCadastro = this.formGroup.controls.dataCadastro.value?.getDate();
  }
  
  enviar(){
    this.service.enviar(this.formGroup.controls.id.value,this.formGroup.controls.nome.value,this.formGroup.controls.modoPreparo.value,this.formGroup.controls.dataCadastro.value).subscribe((resp:any)=> {
      this.onClose.emit(true);
    });
  }

  atualizar(item:any){
    this.formGroup.controls.id.setValue(item.id);
    this.formGroup.controls.modoPreparo.setValue(item.modoPreparo);
    this.formGroup.controls.nome.setValue(item.nome);
    this.formGroup.controls.dataCadastro.setValue(item.dataCadastro);
    this.dataCadastro = this.formGroup.controls.dataCadastro.value?.getDate();
   }

  voltar(){
    this.onClose.emit(true);
  }
}
