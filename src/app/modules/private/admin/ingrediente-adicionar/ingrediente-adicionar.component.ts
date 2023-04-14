import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredienteService } from '../ingrediente.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ingrediente-adicionar',
  templateUrl: './ingrediente-adicionar.component.html',
  styleUrls: ['./ingrediente-adicionar.component.scss']
})
export class IngredienteAdicionarComponent implements OnInit {

  formGroup = this.fb.group({
    id : this.fb.control<number>(0),
    nome : this.fb.control<string>(""),
    dataCadastro : this.fb.control<Date>(new Date())
  })

  dataCadastro! : any;

  @Output()
  onClose= new EventEmitter();

  constructor(private service:IngredienteService,private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataCadastro = this.formGroup.controls.dataCadastro.value?.getDate();
  }


  enviar() { 
    this.service.enviar(this.formGroup.controls.id.value,this.formGroup.controls.nome.value,this.formGroup.controls.dataCadastro.value).subscribe((responde : any ) =>{
      this.onClose.emit();
    });
  }

  atualizar(item:any){
    this.formGroup.controls.id.setValue(item.id),
    this.formGroup.controls.nome.setValue(item.nome),
    this.formGroup.controls.dataCadastro.setValue(item.dataCadastro)
    this.dataCadastro = this.formGroup.controls.dataCadastro.value?.getDate();
  }

  voltar(){
    this.onClose.emit();
  }
}
