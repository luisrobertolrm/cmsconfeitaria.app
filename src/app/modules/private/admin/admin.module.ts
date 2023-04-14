import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReceitaListaComponent } from './receita-lista/receita-lista.component';
import { ComponentesModule } from '../../componentes.module';
import { ReceitaComponent } from './receita-adicionar/receita-adicionar.component';
import { IngredienteListaComponent } from './ingrediente-lista/ingrediente-lista.component';
import { UnidademedidalistaComponent } from './unidademedida-lista/unidademedida-lista.component';
import { UnidademedidaAdicionarComponent } from './unidademedida-adicionar/unidademedida-adicionar.component';
import { IngredienteAdicionarComponent } from './ingrediente-adicionar/ingrediente-adicionar.component';
import { ReceitaingredienteAdicionarComponent } from './receitaingrediente-adicionar/receitaingrediente-adicionar.component';
import { ReceitaingredienteListaComponent } from './receitaingrediente-lista/receitaingrediente-lista.component';
import { CompraListaComponent } from './compra-lista/compra-lista.component';
import { CompraAdicionarComponent } from './compra-adicionar/compra-adicionar.component';
import {DialogModule} from 'primeng/dialog';
import { UsuarioAdicionarComponent } from './usuario-adicionar/usuario-adicionar.component';
import { RotinaDisparoComponent } from './rotina-disparo/rotina-disparo.component';
import { TemplateEmailComponent } from './template-email/template-email.component';
import { TemplateEmailAdicionarComponent } from './template-email-adicionar/template-email-adicionar.component';
import { TemplateEmailRotinaDisparoComponent } from './template-email-rotina-disparo/template-email-rotina-disparo.component';



@NgModule({
  declarations: [
    ReceitaListaComponent,
    ReceitaComponent,
    IngredienteListaComponent,
    UnidademedidalistaComponent,
    UnidademedidaAdicionarComponent,
    IngredienteAdicionarComponent,
    ReceitaingredienteAdicionarComponent,
    ReceitaingredienteListaComponent,
    CompraListaComponent,
    CompraAdicionarComponent,
    UsuarioAdicionarComponent,
    RotinaDisparoComponent,
    TemplateEmailComponent,
    TemplateEmailAdicionarComponent,
    TemplateEmailRotinaDisparoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentesModule,
  ]
})
export class AdminModule { }
