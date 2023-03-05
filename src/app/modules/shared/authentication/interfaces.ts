export interface IUser {
    nome:string;
    login:string;
    foto:string;
 }
 
 export interface JwtVM {
    nome: string;
    login: string;
    foto: string;
    menu: MenuVM[];
    token: string;
 }
 
 export interface MenuVM {
    label: string;
    routerLink: string;
    items: MenuVM[];
 }