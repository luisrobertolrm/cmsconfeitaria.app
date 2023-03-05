import { Component, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuService } from './layout/app.menu.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {

    constructor(private primengConfig: PrimeNGConfig, private menuServide:MenuService) { }
  
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.setTranslation({
            "dayNames": ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            "dayNamesShort": ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            "dayNamesMin": ['Do', 'Se', 'Te', 'Qu', 'Qi', 'Sx', 'Sa'],
            "monthNames": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
              'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            "monthNamesShort": ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            "today": 'Hoje',
            "clear": 'Limpar',
            "dateFormat": 'dd/mm/yy',
            "weekHeader": 'Sem',
            "firstDayOfWeek": 0,
      
          });

          this.menuServide.registerObservables();
    }

    ngOnDestroy(): void {
      this.menuServide.unsubscribeObservables();
    }
}
