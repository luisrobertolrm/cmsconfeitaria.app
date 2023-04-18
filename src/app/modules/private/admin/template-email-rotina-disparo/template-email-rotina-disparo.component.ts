import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TemplateEmailRotinaDisparoService } from '../template-email-rotina-disparo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateEmailService } from '../template-email.service';
import { RotinaDisparoService } from '../rotina-disparo.service';

@Component({
  selector: 'app-template-email-rotina-disparo',
  templateUrl: './template-email-rotina-disparo.component.html',
  styleUrls: ['./template-email-rotina-disparo.component.scss']
})
export class TemplateEmailRotinaDisparoComponent implements OnInit {

  
  rotinaDisparos = [] as any [];
  templateEmails = [] as any [];

  constructor(private service:TemplateEmailRotinaDisparoService,private fb:FormBuilder,private templateEmailService:TemplateEmailService,private rotinaDisparoService:RotinaDisparoService) { }

  formGroup = this.fb.group({
    id:this.fb.control<number>(0),
    rotinaDisparoId:this.fb.control<number>(0),
    templateEmailId:this.fb.control<number>(0)
  })

  ngOnInit(): void {
    this.templateEmailService.getLista().subscribe((itens : any []) =>{
      itens.forEach((value : any) => {
        value.checked = false;
      });
      this.templateEmails = itens;
    })

    this.rotinaDisparoService.obterLista().subscribe((itens : any []) =>{
      this.rotinaDisparos = itens
    })
  }

  public selecionarTemplate(event:any, templateEmail:any){
    templateEmail.checked = event.target.checked;
  }

  public Enviar(){
    var codigosTemplate = new Array();

    var itensSelecionados = this.templateEmails.filter((value : any) =>{
      return value.checked == true;
    });

    itensSelecionados.forEach((value : any) =>{
      codigosTemplate.push(value.id);
    });

    this.service.Enviar(this.formGroup.controls.id.value, codigosTemplate, this.formGroup.controls.rotinaDisparoId.value)
    .subscribe((response : any) => {} );
  }
}
