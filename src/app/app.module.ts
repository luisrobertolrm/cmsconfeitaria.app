import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy, registerLocaleData  } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { DashboardModule } from './demo/components/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from './modules/componentes.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './modules/shared/interceptors/http-error-interceptor';
import { MessageInterceptor } from './modules/shared/interceptors/message.interceptor';
import { LoadingInterceptor } from './modules/shared/interceptors/loading.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { NOME_TOKEN } from './modules/shared/authentication/authentication.service';
import { JwtVM } from './modules/shared/authentication/interfaces';
import { environment } from 'src/environments/environment';
import localePT from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePT);

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppLayoutModule, 
        DashboardModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: () => {
                var jwtInString = localStorage.getItem(NOME_TOKEN);

                if(!jwtInString) return null;
                
                var token: JwtVM = JSON.parse(jwtInString);

                return token.token;
              },
              allowedDomains: environment.DomininiosBearerToken,
            }
          })
    ],
    providers: [
      DatePipe,
      DecimalPipe,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MessageInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
         },
         { provide: LOCALE_ID, useValue: 'pt-br' },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
