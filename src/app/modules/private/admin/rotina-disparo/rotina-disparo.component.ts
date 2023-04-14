import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdateModeEnum } from 'chart.js';
import { RotinaDisparoService } from '../rotina-disparo.service';

interface TipoIntervalo {
  nome:string,
  valor:number
}



@Component({
  selector: 'app-rotina-disparo',
  templateUrl: './rotina-disparo.component.html',
  styleUrls: ['./rotina-disparo.component.scss']
})


export class RotinaDisparoComponent implements OnInit {

  dataCadastro! : any;
  tiposIntervalos!: TipoIntervalo[];

  constructor(private fb : FormBuilder, private service : RotinaDisparoService ) { }

  ngOnInit(): void {
    this.tiposIntervalos = [
      {nome : 'Diario', valor : 1},
      {nome : 'Semanal', valor : 2},
      {nome : 'Mensal', valor : 3},
      {nome : 'Hora a hora', valor : 4},
    ]

    this.dataCadastro = this.RotinaDisparo.controls.dataCadastro.value?.getDate();
  }

  RotinaDisparo = this.fb.group({
      id : this.fb.control<number>(0),
      nome : this.fb.control<string>(""),
      intervalo : this.fb.control<Date>(new Date()),
      tipoIntervalo : this.fb.control<any>,
      dataCadastro : this.fb.control<Date>(new Date())
  })

  public Enviar(){
    this.service.Enviar(this.RotinaDisparo.controls.id.value,this.RotinaDisparo.controls.nome.value,this.RotinaDisparo.controls.intervalo.value,this.RotinaDisparo.controls.tipoIntervalo.value,this.RotinaDisparo.controls.dataCadastro.value)
    .subscribe((response : any) => {} );
  }

}
