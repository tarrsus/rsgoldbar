import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  NgForm,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';
import { PaymentGatewayService } from 'src/app/shared/payment-gateway.service';
import { StockService } from 'src/app/shared/stock.service';
import { MyErrorStateMatcher } from 'src/app/shared/utils';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass']
})
export class StockComponent implements OnInit {
  lastUpdated;
  matcher = new MyErrorStateMatcher();
  result = [];
  stockForm = new FormGroup({
    rs3PriceSelling: new FormControl(0, Validators.required),
    rs3PriceBuying: new FormControl(0, Validators.required),
    rs3Units: new FormControl(0, Validators.required),
    osrsPriceSelling: new FormControl(0, Validators.required),
    osrsPriceBuying: new FormControl(0, Validators.required),
    osrsUnits: new FormControl(0, Validators.required)
  });

  pgsArray = new FormArray([]);
  paymentGatewaysForm = new FormGroup({
    pgs: this.pgsArray
  });

  constructor(
    private stock: StockService,
    private paymentgatewayService: PaymentGatewayService
  ) {}

  ngOnInit() {
    this.fetchDataStock();
    this.fetchPaymentGateways();
  }

  public fetchDataStock() {
    this.stock.getStock().subscribe(stocks => {
      this.stockForm.get('rs3PriceSelling').setValue(stocks.rs3.selling);
      this.stockForm.get('rs3PriceBuying').setValue(stocks.rs3.buying);
      this.stockForm.get('rs3Units').setValue(stocks.rs3.units);

      this.stockForm.get('osrsPriceSelling').setValue(stocks.osrs.selling);
      this.stockForm.get('osrsPriceBuying').setValue(stocks.osrs.buying);
      this.stockForm.get('osrsUnits').setValue(stocks.osrs.units);
    });
  }

  public fetchPaymentGateways() {
    while (this.pgsArray.length > 0) {
      this.pgsArray.removeAt(0);
    }
    this.paymentgatewayService.getPaymentGateways().subscribe(response => {
      response.forEach(element => {
        const formGroup = new FormGroup({
          fees: new FormControl(element.fees),
          limit: new FormControl(element.limit),
          name: new FormControl({ value: element.name, disabled: true }),
          paymentGatewayId: new FormControl({
            value: element.paymentGatewayId,
            disabled: true
          })
        });
        this.pgsArray.push(formGroup);
      });
    });
  }

  public getPgs(): any {
    return this.paymentGatewaysForm.controls['pgs'] as any;
  }

  public updateStocks() {
    this.stock.updateStock(this.stockForm.getRawValue()).subscribe(result => {
      this.fetchDataStock();
    });
  }

  public updatePgs() {
    this.paymentgatewayService
      .updatePaymentGateways(this.paymentGatewaysForm.getRawValue())
      .subscribe(result => {
        this.fetchPaymentGateways();
      });
  }
}
