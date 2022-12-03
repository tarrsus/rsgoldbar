import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.sass']
})
export class GenericTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[] = [];
  @Input() data: string[] = [];
  @Output() action: EventEmitter<any> = new EventEmitter();
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.data);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data !== undefined && changes.data.currentValue !== undefined) {
      this.dataSource.data = changes.data.currentValue;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public execute(action: string, element: any) {
    this.action.emit({ action, element });
  }

  public getName(input: string) {
    switch (input) {
      case 'orderId':
        return 'Order ID';
      case 'total':
        return 'Total';
      case 'server':
        return 'Server';
      case 'subServer':
        return 'Sub-Server';
      case 'description':
        return 'Description';
      case 'dateCreated':
        return 'Date Created';
      case 'lastUpdated':
        return 'Last Updated';
      case 'ipAddress':
        return 'IP Address';
      case 'action':
        return 'Action';
      case 'userId':
        return 'User ID';
      case 'groupName':
        return 'Group Name';
      case 'email':
        return 'Email';
      case 'update':
        return 'Update';
      case 'edit':
        return 'Edit';
      case 'rsn':
        return 'RSN';
      case 'refBy':
        return 'Referred By';
      case 'blacklisted':
        return 'Blacklisted';
      case 'totalValue':
        return 'Total Value';
      case 'totalOrders':
        return 'Total Orders';
      case '_id':
        return 'ID';
      case 'view':
        return 'View';
      case 'code':
        return 'Code';
      default:
        return input;
    }
  }
}
