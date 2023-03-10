import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter, Subject } from 'rxjs';
import { MenuChangeEvent } from './api/menuchangeevent';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    dadosNavegacao: { [rota: string] : any; } = {};

    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    private breadcrumbSubject = new Subject<MenuItem[]>();
    breadcrumbObservable = this.breadcrumbSubject.asObservable();

    constructor(public router: Router){}

    registerObservables(){

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((evt:any) => {
            var menuItens = this.criarMigalha(evt.url);        
            this.breadcrumbSubject.next(menuItens);
        });

    }

    registrarBreadcrumb(menus: MenuItem[]){
        this.breadcrumbSubject.next(menus);
    }

    unsubscribeObservables(){
        this.breadcrumbSubject.unsubscribe();
        this.menuSource.unsubscribe();
    }


    criarMigalha(url: any, routerLink: string = ""){
        var its = url.split("/");
        var obj = [];
        for (var i = 0; i < its.length; i++) {
            if(its[i] != "")              
               obj.push({label: its[i], routerLink: routerLink} as MenuItem);
        }

        return obj;
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
}
