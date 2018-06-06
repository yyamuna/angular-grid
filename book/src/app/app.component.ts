import { Component } from '@angular/core';

//import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  constructor(){
    this.columnDefs=[
      {
        headerName:"id",
        field:"id",
        width:150
      },
      {
        headerName: "Name",
        field:"Name",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"designation",
        field:"designation",
        width:150
      
      },
      {
        headerName:"expertise",
        field:"expertise",
        width:150
      
      }



    ];
  }
  onGridReady(params){
    this.gridApi= params.api;
    this.gridColumnApi=params.columnApi;
    
  }
}
