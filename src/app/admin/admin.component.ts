import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Polka'},
      { position: 2, name: 'Menuiserie'},
      { position: 3, name: 'Portrait'},
      { position: 4, name: 'Caligraphie'},
      { position: 5, name: 'Mandarin'},
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  position: number;
  name: string;
}
