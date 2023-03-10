export interface ColsTable {
    field: string;
    header: string;
    order?:boolean ;
    sortable?: boolean;
    width?: string;
    format?: string;
    dataType?:string;
    isTemplate?:boolean;
}