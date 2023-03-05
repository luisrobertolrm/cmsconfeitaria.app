import { DatePipe, DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { ColsTable } from './interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  getFlex(col: any): any {
    if(!col.width) return 'auto';
    return '';
  }
  

  @Input() iconExcluir:string = 'fa-regular fa-trash-can';
  @Input() iconAlterar:string = 'fa-regular fa-pen-to-square';
  @Input() iconDetalhar:string = 'pi pi-eye';
  @Input() iconImprimir:string = 'fa-regular fa-file-pdf';
  @Input() iconAcao1:string = 'fa-regular';
  @Input() iconAcao2:string = 'fa-regular';

  @Input() toolTipExcluir:string = 'Excluir';
  @Input() toolTipAlterar:string = 'Alterar';
  @Input() toolTipDetalhar:string = 'Detalhar';
  @Input() toolTipImprimir:string = 'Imprimir';
  @Input() toolTipAcao1:string = 'Imprimir';
  @Input() toolTipAcao2:string = 'Imprimir';


  @Input() paginator: boolean  = true;
  @Input() cols: ColsTable[] = [];
  @Input() registros: any[] = [];
  
  @Input() isExisteExcluir: boolean = false;
  @Input() isExisteAlterar: boolean = false;
  @Input() isExisteDetalhar: boolean = false;
  @Input() isExisteImprimir: boolean = false;
  @Input() isExisteAcao1: boolean = false;
  @Input() isExisteAcao2: boolean = false;
  @Input() isSelecionar: boolean = false;
  @Input() isSelecaoMultipla: boolean = false;

  @Input() itemSelecionado: any | null = null;
  @Output() itemSelecionadoChange: EventEmitter<any> = new EventEmitter();

  @Output() onItemSelecionadoChange: EventEmitter<any> = new EventEmitter();
  
  @Input() isLazy: boolean = false;

  @Output() onLazyLoadTable: EventEmitter<any> = new EventEmitter();
  @Output() onExcluir: EventEmitter<any> = new EventEmitter();
  @Output() onAlterar: EventEmitter<any> = new EventEmitter();
  @Output() onDetalhar: EventEmitter<any> = new EventEmitter();
  @Output() onImprimir: EventEmitter<any> = new EventEmitter();
  @Output() onAcao1: EventEmitter<any> = new EventEmitter();
  @Output() onAcao2: EventEmitter<any> = new EventEmitter();

  @ViewChild('dt') dataTable!: Table;

  first = 0;
  last = 0;
  rows = 10;

  @Input()
  totalRecords = 0;
  


  createLazyLoadMetadata(){
    return this.dataTable.createLazyLoadMetadata()
  }

  constructor(public router: Router, private datePipe: DatePipe, private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    //this.totalRecords = this.registros.length;
  }

  handleExcluir(rowData:any, ctrl:any) {
    var dataEvent = {data: rowData, target: ctrl.target}
    this.onExcluir.emit(dataEvent);
  }

  handleAlterar(event:any) {
    this.itemSelecionado = event;
    this.onAlterar.emit(event);
  }

  handleDetalhar(event:any) {
    this.onDetalhar.emit(event);
  }
  
  handleImprimir(event:any){
    this.onImprimir.emit(event);
  }

  handleAcao1(event:any){
    this.onAcao1.emit(event);
  }

  handleAcao2(event:any){
    this.onAcao1.emit(event);
  }

  handleLazyLoad(event: LazyLoadEvent) {
    if(this.isLazy)
      this.onLazyLoadTable.emit(event);
  }

  resetSort() {
    this.dataTable.sortOrder = 0;
    this.dataTable.sortField = '';
  }  

  setItemSelecionado(item: any) {
    this.itemSelecionado = item;
  }

  onRowSelect(event: any){
    this.itemSelecionadoChange.emit(event.data);
    this.onItemSelecionadoChange.emit(event.data);
  }

  isDate(field:ColsTable){

    if(field.dataType == "date") return true;
    if(field.field.toString().toLowerCase().includes('data')) return true;

    return false;
  }

  getValue(rowData:any, field:ColsTable){
    
    if(this.isDate(field)) {    
      if(field.format){
        var dt = this.datePipe.transform(rowData[field.field],field.format) as string;
        dt = dt?.replace('.','');

        return dt.toUpperCase();
      }

      return this.datePipe.transform(rowData[field.field],'dd/MM/yyyy');

    }else if(field.format && !isNaN(rowData[field.field])){
      var dt = this.decimalPipe.transform(rowData[field.field], field.format) as string;
      return dt;
    }
    else if(field.isTemplate){
      const regex = /(\{{[a-zA-Z0-9]*\}})/gm;

      var valorCampo = field.field;
      var valorSubstituido = field.field;
      
      var match = regex.exec(field.field);

      let isAnyNotNull = false;

      while (match != null) {
        var grupo = match[0];
        var nomecampoDados = grupo.replace("{{","").replace("}}","");
        var value = rowData[nomecampoDados]??'';
        
        if(value != '') isAnyNotNull = true;

        var valorSubstituido = valorSubstituido.replace(match[0], value);

        match = regex.exec(field.field);
      }

      if(isAnyNotNull) return valorSubstituido;
      else return '';
    }
    else{
      return rowData[field.field]
    }

  }

}
