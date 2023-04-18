import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UnidademedidaService } from '../unidademedida.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-unidademedida-adicionar',
  templateUrl: './unidademedida-adicionar.component.html',
  styleUrls: ['./unidademedida-adicionar.component.scss']
})
export class UnidademedidaAdicionarComponent implements OnInit {


  constructor(private service:UnidademedidaService, private fb: FormBuilder ) { }

  formGroup = this.fb.group({
    id : this.fb.control<number>(0),
    nome : this.fb.control<string>(""),
    sigla : this.fb.control<string>(""),
    dataCadastro : this.fb.control<Date>(new Date())
  })

  dataCadastro! : any;

  @Output()
  onClose = new EventEmitter();

  ngOnInit(): void {
    this.dataCadastro = this.formGroup.controls.dataCadastro.value?.getDate()
  }


  enviar() {
    this.service.enviar(this.formGroup.controls.nome.value,this.formGroup.controls.sigla.value,this.formGroup.controls.id.value,this.formGroup.controls.dataCadastro.value).subscribe();      
    this.onClose.emit();
  }

  atualizar(item:any){67
    this.formGroup.controls.id.setValue(item.id);
    this.formGroup.controls.nome.setValue(item.nome);
    this.formGroup.controls.dataCadastro.setValue(item.dataCadastro);
    this.formGroup.controls.id.setValue(item.id);
    this.onClose.emit();
  }

  voltar(){
    this.onClose.emit();
  }
}
