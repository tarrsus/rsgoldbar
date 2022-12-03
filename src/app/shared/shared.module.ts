import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WatcherService } from './watcher.service';
import { AccountService } from './account.service';
import { OrderService } from './order.service';
import { StockService } from './stock.service';
import { TransactionsService } from './transactions.service';
import { AuthInterceptor } from './interceptors/authinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { MatButtonModule } from '@angular/material/button';
import { RequestsService } from './requests.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountUpModule } from 'countup.js-angular2';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { BlogService } from './blog.service';
import { QuillModule } from 'ngx-quill';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { BasePageService } from './base-page.service';
import { CommonOrdersComponent } from './components/common-orders/common-orders.component';
import { PaymentGatewayService } from './payment-gateway.service';
import { BannedComponent } from './modals/banned/banned.component';
import { ReferralService } from './referral.service';
import { CartService } from './cart.service';
import { ServicesService } from './services.service';
import { SkillService } from './skill.service';
@NgModule({
  declarations: [
    GenericTableComponent,
    PaymentMethodsComponent,
    CommonOrdersComponent,
    BannedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSortModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    NgxPaginationModule,
    CountUpModule,
    QuillModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSortModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    NgxPaginationModule,
    CountUpModule,
    QuillModule,
    PaymentMethodsComponent,
    GenericTableComponent,
    CommonOrdersComponent
  ],
  entryComponents: [BannedComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        AccountService,
        OrderService,
        StockService,
        TransactionsService,
        UserService,
        WatcherService,
        RequestsService,
        BlogService,
        BasePageService,
        PaymentGatewayService,
        ReferralService,
        CartService,
        ServicesService,
        SkillService
      ]
    };
  }
}
