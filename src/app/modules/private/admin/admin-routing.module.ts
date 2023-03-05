import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReceitaListaComponent } from './receita-lista/receita-lista.component';
import { IngredienteListaComponent } from './ingrediente-lista/ingrediente-lista.component';
import { UnidademedidalistaComponent } from './unidademedida-lista/unidademedida-lista.component';
import { UnidademedidaAdicionarComponent } from './unidademedida-adicionar/unidademedida-adicionar.component';
import { IngredienteAdicionarComponent } from './ingrediente-adicionar/ingrediente-adicionar.component';
import { ReceitaComponent } from './receita-adicionar/receita-adicionar.component';
import { ReceitaingredienteAdicionarComponent } from './receitaingrediente-adicionar/receitaingrediente-adicionar.component';
import { ReceitaingredienteListaComponent } from './receitaingrediente-lista/receitaingrediente-lista.component';
import { CompraListaComponent } from './compra-lista/compra-lista.component';
import { CompraAdicionarComponent } from './compra-adicionar/compra-adicionar.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: '', component: ReceitaListaComponent },
      { path: 'receitacriar', component: ReceitaComponent},
      { path: 'ingrediente', component: IngredienteListaComponent },
      { path: 'unidademedida', component: UnidademedidalistaComponent},
      { path: 'unidademedidacriar', component: UnidademedidaAdicionarComponent},
      { path: 'ingredientecriar', component: IngredienteAdicionarComponent},
      { path: 'receitaingredientecriar', component: ReceitaingredienteAdicionarComponent},
      { path: 'receitaingrediente', component: ReceitaingredienteListaComponent},
      { path: 'compra', component: CompraListaComponent},
      { path: 'compraadicioanr', component: CompraAdicionarComponent},
    ])
  ]
})
export class AdminRoutingModule { 

}
