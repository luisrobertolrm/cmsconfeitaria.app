import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { RooteGuard } from './roote.guard';
import { LoginComponent } from './modules/shared/login/login.component';
import { IngredienteListaComponent } from './modules/private/admin/ingrediente-lista/ingrediente-lista.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                        path: '', loadChildren: () => { return import('./modules/private/private.module').then(m => m.PrivateModule)} , canActivate: [RooteGuard]
                    }
                    ,{path: 'login', component: LoginComponent}
                ],
            },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
