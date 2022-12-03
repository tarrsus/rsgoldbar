import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PaymentGatewayService } from '../../payment-gateway.service';
import { getPaymentGateways } from '../../utils';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.sass']
})
export class PaymentMethodsComponent implements OnInit {
  _paymentMethods = getPaymentGateways();


  paymentMethods = [];

  @Output() onSelect = new EventEmitter<{ selected: any }>();
  @Output() onTrigger = new EventEmitter<boolean>();
  @Input() currentPaymentMethod;
  constructor(public http: HttpClient, private paymentGatewayService: PaymentGatewayService) { }


  //cb - visa - mc - zelle - ideal - bancontact
  ngOnInit(): void {

    // this.http.get('https://extreme-ip-lookup.com/json/').subscribe((r: any) => {
      const selectedPayment = this._paymentMethods.find(x => x.name === this.currentPaymentMethod);

      // switch (r.countryCode) {
      //   case 'US':
      //   case 'CA':
      //   case 'UK':
      //   case 'AU':
      //     if (selectedPayment) {
      //       this.select(selectedPayment);
      //     }
      //     break;
      //   default:
      this.paymentMethods = this._paymentMethods.filter(x => x.name !== 'visa' && x.name !== 'mastercard' && x.name !== 'zelle');
      if (selectedPayment) {
        this.select(selectedPayment);
        //     }
        //     break;
      }
    // })
  }

  public select(paymentGateway: any) {
    this.paymentMethods.forEach(p => p.selected = false);
    const found = this.paymentMethods.find(p => p.name === paymentGateway.name);
    if (found) {
      found.selected = true;
      this.onSelect.emit(found);
    }
  }

  public buy() {
    this.onTrigger.emit(true);
  }
}
