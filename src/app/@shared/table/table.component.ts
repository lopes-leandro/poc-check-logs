import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

interface Col {
  header: string;
  field: string;
}

@Component({
  selector: 'dva-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tablePaginator: boolean;
  @Input() rowsPager: number = 5;
  @Input() cols: Col[];
  @Input() data: any[];

  @ViewChild('dt') table: Table;

  constructor() {}

  ngOnInit(): void {
  }
}
