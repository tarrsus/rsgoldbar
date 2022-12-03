import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-banned',
  templateUrl: './banned.component.html',
  styleUrls: ['./banned.component.sass']
})
export class BannedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BannedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }


  public close() {
    this.dialogRef.close();
  }
}
