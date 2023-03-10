import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { RooteGuard } from './roote.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent, canActivate: [RooteGuard],
                children: [
                    {
                        path: '', loadChildren: () => { return import('./modules/private/private.module').then(m => m.PrivateModule)} , canActivate: [RooteGuard]
                    }
                ]
            },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
