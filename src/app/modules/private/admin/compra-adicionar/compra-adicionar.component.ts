import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { runInThisContext } from 'vm';
import { CompraService } from '../compra.service';
import { IngredienteService } from '../ingrediente.service';
import { UnidademedidaService } from '../unidademedida.service';
import { FormBuilder } from '@angular/forms';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-compra-adicionar',
  templateUrl: './compra-adicionar.component.html',
  styleUrls: ['./compra-adicionar.component.scss']
})
export class CompraAdicionarComponent implements OnInit {

 formGroup = this.fb.group({
  id : this.fb.control<number>(0),
  ingredienteId : this.fb.control<number>(0),
  unidadeMedidaId : this.fb.control<number>(0),
  quantidade : this.fb.control<number>(0),
  dataCompra : this.fb.control<Date>(new Date()),
  valor : this.fb.control<number>(0),
 })

  dataCompra! : any;
  unidadeMedidas = [] as any[];
  ingredientes = [] as any[];

  @Output()
  onClose=new EventEmitter();

  constructor(public service:CompraService,public unidadeService:UnidademedidaService,public ingredienteService:IngredienteService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.unidadeService.getLista().subscribe((item : any) =>{
        this.unidadeMedidas = item;
    })

    this.ingredienteService.getLista().subscribe((item : any )=>{
      this.ingredientes = item;
    })

    this.dataCompra = this.formGroup.controls.dataCompra.value?.getDate();
  }

  enviar(){
    this.service.enviar(this.formGroup.controls.id.value,this.formGroup.controls.ingredienteId.value,this.formGroup.controls.unidadeMedidaId.value,this.formGroup.controls.quantidade.value,this.formGroup.controls.dataCompra.value,this.formGroup.controls.valor.value).subscribe((response : any) =>{
      this.onClose.emit();
    });
  }


  atualizar(item : any){
    this.formGroup.controls.id.setValue(item.id);
    this.formGroup.controls.id.setValue(item.ingredienteId);
    this.formGroup.controls.id.setValue(item.unidadeMedidaId);
    this.formGroup.controls.id.setValue(item.quantidade);
    this.formGroup.controls.id.setValue(item.dataCompra);
    this.formGroup.controls.id.setValue(item.valor);
    this.dataCompra = this.formGroup.controls.dataCompra.value;
  }
  
  voltar(){
    this.onClose.emit();
  }

}
