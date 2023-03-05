import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationRouteGuard } from './location-route.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
       {path: 'admin',  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },        
      ])
    ],
    exports: [RouterModule],
})
export class PrivateRoutingModule { }