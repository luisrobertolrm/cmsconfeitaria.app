import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-receita-adicionar',
  templateUrl: './receita-adicionar.component.html',
  styleUrls: ['./receita-adicionar.component.scss']
})
export class ReceitaComponent implements OnInit {
  alert=false;

  id=0;
  nome:string|null=null;
  modoPreparo:string|null=null;
  dataCadastro:Date|null=null;

  constructor(private service:AdminService) { }

  @Output()
  onClose = new EventEmitter();


  ngOnInit(): void {
  }
  
  novo(){
    this.dataCadastro= new Date();
  }

  enviar(){
    this.service.enviar(this.id,this.nome,this.modoPreparo,this.dataCadastro).subscribe((resp:any)=> {
      this.onClose.emit();
    });
    this.alert = true;
  }

  atualizar(item:any){
    this.id= item.id;
    this.modoPreparo= item.modoPreparo;
    this.nome= item.nome;
    this.dataCadastro= item.dataCadastro;
    console.log(item);
  }

  voltar(){
    this.onClose.emit();
  }
}
